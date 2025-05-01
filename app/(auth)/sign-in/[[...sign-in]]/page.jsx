'use client';

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1670513726429-50c736574ea1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to AI Interview Mocker</h1>
          <p className="text-lg max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
}
