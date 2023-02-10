import Link from "next/link";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import ToolTip from "../ToolTip";
type Props = {
  id: string;
};
const ChatRow = ({ id }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const [messages, loading, error] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  const deleteChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);
  return (
    <>
      <Link
        href={`/chat/${id}`}
        className={`chatRow justify-center ${active && "bg-gray-700/70"} my-2`}
      >
        <ToolTip message={"view"}>
          <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-indigo-600 m-1 " />
          <p className="flex-1 hidden md:inline-flex truncate">
            {messages?.docs[messages?.docs.length - 1]?`${messages?.docs[messages?.docs.length - 1]?.data().text.slice(0,15)}...`:"Chat"}
          </p>
        </ToolTip>
        <ToolTip message={"delete"}>
          <TrashIcon
            className="w-6 h-6 text-red-600 hover:text-red-800"
            onClick={deleteChat}
          />
        </ToolTip>
      </Link>
    </>
  );
};

export default ChatRow;
