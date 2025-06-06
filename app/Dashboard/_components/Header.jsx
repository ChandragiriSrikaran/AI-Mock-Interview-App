"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import "../../globals.css";
import { usePathname, useRouter } from "next/navigation";
import AddNewInterview from "./AddNewInterview";



function Header() {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log(path);
  }, [path]);

  function onClickFun(destination) {
    return () => {
      router.push("/" + destination);
    };
  }
  return (
    <>
      <div className="sticky top-0 z-40 bg-white shadow-md flex p-4 items-center justify-between">
        <Image src="/logo.svg" alt="Logo" width={50} height={40} />
        <ul className="hidden md:flex gap-8">
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/question" ? "text-primary font-bold" : ""
            }`}
            onClick={onClickFun("question")}
          >
            Home
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/Dashboard" ? "text-primary font-bold" : ""
            }`}
            onClick={onClickFun("Dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/working" ? "text-primary font-bold" : ""
            }`}
            onClick={onClickFun("working")}
          >
            How it Works ?
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/upgrade" ? "text-primary font-bold" : ""
            }`}
            onClick={onClickFun("upgrade")}
          >
            Upgrade
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/Dashboard/interview" ? "text-primary font-bold" : ""
            }`}
          >
            <AddNewInterview open={true} />
          </li>
        </ul>
         <UserButton/>
      </div>
    </>
  );
}

export default Header;