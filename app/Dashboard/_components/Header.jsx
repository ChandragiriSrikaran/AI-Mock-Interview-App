"use client";
import React, { use, useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import "../../globals.css";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);
  const router = useRouter();
  function onClickFun(destination) {
    return () => {
      router.push("/"+destination);
    };
  }

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
    
      <Image src="/logo.svg" alt="Logo" width={50} height={40} />
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === "/Dashboard" ? "text-primary font-bold" : ""}`}
          onClick={onClickFun('Dashboard')}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === "/Dashboard/faq" ? "text-primary font-bold" : ""}`}
          onClick={onClickFun('question')}
        >
          Question
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === "/Dashboard/faq" ? "text-primary font-bold" : ""}`}
          onClick={onClickFun('upgrade')}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === "/Dashboard/howitworks" ? "text-primary font-bold" : ""}`}
          onClick={onClickFun('working')}
        >
          How it Works ?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}
export default Header;
