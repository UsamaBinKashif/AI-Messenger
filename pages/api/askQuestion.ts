// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";
import  admin  from "firebase-admin";
import { adminDB } from "../../firebase/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, model, chatId, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat-id" });
    return;
  }

  const response: any = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "AI is unable to find the prompt you have written!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "AI",
      name: "AI Messenger",
      avatar: `https://ui-avatars.com/api/?name=AI`,
    },
  };

  await adminDB
    .collection("users")
    .doc(session?.user?.email!)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
