"use client";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if(status==='authenticated'){
    router.push('/')
  }

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center ">
      <div className="h-full shadow-xl rounded-md flex flex-col md:flex-row md:h-[60%] md:w-full lg:w-[60%] lg:h-[80%] ">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image
            src="/loginBg.png"
            alt="Login Background Img"
            fill
            className="object-cover object-bottom"
          />
        </div>
        <div className="p-10 flex flex-col gap-8 md:w-1/2 md:justify-center">
          <h1 className="font-bold text-xl xl:text-2xl">Login </h1>
          <p className="font-light">
            Login into your accounts or create a new account using the socials
          </p>
          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center gap-4 p-4 ring-1 ring-orange-100 rounded-md w-fit hover:bg-zinc-500/50 hover:text-white"
          >
            <span>
              <FcGoogle size={24} />
            </span>
            <span className="text-sm xl:text-base">Sign in with Google</span>
          </button>
          <button className="flex items-center gap-4 p-4 ring-1 ring-blue-100 rounded-md w-fit justify-center hover:bg-blue-400/50 hover:text-white">
            <span>
              <AiFillFacebook
                className="text-blue-900 hover:text-white"
                size={24}
              />
            </span>
            <span className="text-sm xl:text-base">Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a Problem ?{" "}
            <Link href="/" className="underline">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
