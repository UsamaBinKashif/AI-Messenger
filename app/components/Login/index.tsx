"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import LOGO from "../../../public/logo.jpg";
const Login = () => {
  return (
    <section className="flex justify-center items-center flex-col h-screen bg-black text-center w-screen ">
      <Image
        src={LOGO}
        width={100}
        height={100}
        alt="LOGO"
        className="animate-bounce mb-4 "
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold bg-[#343559] hover:bg-[#343541] p-2 rounded-lg"
      >
        Sign in to use AI Messenger
      </button>
    </section>
  );
};

export default Login;
