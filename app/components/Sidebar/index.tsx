"use client";

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Image from "next/image";
import NewChat from "../NewChat";
import ToolTip from "../ToolTip";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import ChatRow from "../ChatRow";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  

  const { data: session } = useSession();
  const router = useRouter();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  const logOut = () => {
    signOut();
    router.push("/");
  };

  return (
    <section className="p-1 flex flex-col h-full md:h-screen ">
      <article className="flex-1 overflow-y-scroll overflow-x-hidden">
        <section>
          <NewChat />
          {chats?.docs.map((chat: any) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </section>
      </article>
      <article className="flex flex-col justify-center items-center space-y-4">
        {session && (
          <>
            <Image
              src={session.user?.image!}
              alt="users-image"
              width={50}
              height={50}
              className="rounded-full mx-auto cursor-pointer hover:opacity-50  transition-all"
            />
            <p className="text-xs text-white font-bold">
              {session.user?.name!}
            </p>
            <button
              className="mx-auto p-2 bg-gray-700/70 text-white text-xs hover:opacity-50 "
              onClick={logOut}
            >
              Sign out
            </button>
          </>
        )}
      </article>
    </section>
  );
};

export default Sidebar;
