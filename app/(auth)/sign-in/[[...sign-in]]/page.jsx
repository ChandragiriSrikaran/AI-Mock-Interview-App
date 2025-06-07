'use client';

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="background-pattern min-h-screen flex items-center justify-center px-4">
      <SignIn
        appearance={{
          elements: {
            card: {
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
            },
            cardBox: {
              border: 'none',
            },
          },
        }}
      />
    </div>
  );
}
