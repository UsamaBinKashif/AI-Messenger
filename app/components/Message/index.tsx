import { DocumentData } from "firebase/firestore";
type Props = {
  message: DocumentData;
};
const Message = ({ message }: Props) => {
  const AI = message.user.name ==="AI Messenger"
  console.log(message.user)
  return (
    <>
      <article className={`p-5 text-white  ${AI?"bg-[#434654]":""} `}>
        <section className="flex space-x-5 px-10 max-w-2xl mx-auto">
          <img src={message.user.avatar} alt="avatar" className="h-8 w-8 rounded-full" />
          <p className="pt-1 text-sm">{message.text}</p>
        </section>
      </article>
    </>
  );
};

export default Message;
