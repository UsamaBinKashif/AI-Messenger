"use client";
import { PlusIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../../../firebase/firebase";
const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messages: {},
        userID: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  return (
    <section>
      <article
        className="border border-blue-500 chatRow my-2"
        onClick={() => {
          router.replace("/");
        }}
      >
        <ArrowLeftIcon className="h-4 w-4 text-blue-500" />
        <p className="text-blue-500">Home</p>
      </article>
      <article
        className="border border-gray-700 chatRow my-2"
        onClick={() => createNewChat()}
      >
        <PlusIcon className="h-4 w-4" />
        <p>New Chat</p>
      </article>
    </section>
  );
};

export default NewChat;
