'use client';

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="diamond-lines min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-white to-pink-100 px-4">
      <SignIn
        appearance={{
          elements: {
            card: {
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none'
            },
            cardBox: {
              border: 'none',
            },
          }
        }}
      />
    </div>
  );
}
