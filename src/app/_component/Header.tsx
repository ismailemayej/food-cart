"use client";
import React from "react";
import logo from "@/assest/food cart logo.png";
import Image from "next/image";
import { Search, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="lg:px-16 px-2 py-2 shadow-md">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="Food cart" height={80} width={200} />
        <div className="flex gap-2 bg-slate-200 justify-center items-center rounded-xl px-2 ">
          <input
            type="text"
            className="bg-transparent rounded-xl outline-none w-full py-2"
            placeholder="Watch,Mobile........"
          />
          <Search className=" size-8 hover:transition-all hover:bg-orange-500 rounded-full p-1 hover:text-white" />
        </div>

        <div className="flex gap-2 items-center">
          <div className=" relative">
            <ShoppingBasket />
            <p className=" bg-slate-200 px-1 shadow-2xl rounded-full text-[0.8rem] absolute text-center text-red-500 font-extrabold bottom top-[-1.2rem] right-[-0.5rem]">
              50
            </p>
          </div>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <div className=" lg:block hidden ">
              <div className="flex gap-2">
                <SignInButton mode="modal">
                  <Button variant="outline">Login</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>Sign-Up</Button>
                </SignUpButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
