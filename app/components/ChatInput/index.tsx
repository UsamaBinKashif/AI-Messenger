//@ts-nocheck
"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { db } from "../../../firebase/firebase";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  chatId: string;
};
const ChatInput = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");

  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    //toast
    const notification = toast.loading("AI is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("AI has responded", {
        id: notification,
      });
    });
  };
  return (
    <>
      <section className="bg-gray-700/50 text-gray-400 text-sm  ">
        <form
          className="p-5 space-x-5 flex justify-center"
          onSubmit={sendMessage}
        >
          <input
            className="outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:bg-gray-300"
            disabled={!session}
            type="text"
            placeholder="Type your message here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            disabled={!session || !prompt}
            className="bg-green-500 hover:opacity-50 rounded font-bold p-4 cursor-pointer text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
          </button>
        </form>
      </section>
    </>
  );
};

export default ChatInput;
