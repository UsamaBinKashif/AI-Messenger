
import "../styles/globals.css";
import Sidebar from "./components/Sidebar";
import { SessionProvider } from "./SessionProvider/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "./components/Login";
import ClientProvider from "./ClientProvider";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body className="flex">
        {!session ? (
          <Login />
        ) : (
          <SessionProvider session={session}>
            <aside className="bg-[#202123] max-w-xs md:min-w-[20rem] md:h-screen overflow-y-auto">
              <Sidebar />
            </aside>
            <ClientProvider />
            <main className="bg-[#343541] flex-1 ">{children}</main>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
