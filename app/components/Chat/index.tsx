//@ts-nocheck
"use client";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase/firebase";
import Message from "../Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
type Props = {
  chatId: string;
};
const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();

  const [messages] = useCollection(
    query(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      orderBy("createdAt", "asc")
    )
  );
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });
  return (
    <section className="flex-1 overflow-x-hidden overflow-y-scroll ">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 animate-bounce text-green-600" />
        </>
      )}
      <span ref={divRef}>
        {messages?.docs.map((message) => (
          <Message message={message.data()} key={message.id} />
        ))}
      </span>
    </section>
  );
};

export default Chat;
