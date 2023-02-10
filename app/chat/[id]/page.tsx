import ChatInput from "../../components/ChatInput";
import Chat from "../../components/Chat";
type Props = {
  params: {
    id: string;
  };
};
const ChatPage = ({ params: { id } }: Props) => {
  return (
    <section className="flex flex-col h-screen overflow-hidden ">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </section>
  );
};

export default ChatPage;
