'use client';
import React from 'react';
import Header from '../Dashboard/_components/Header';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; 

const benefits = [
  'Unlimited mock interviews',
  'AI-powered post-interview feedback',
  'Access to detailed performance ratings',
  'Customize interview difficulty and roles',
  'Download interview reports',
];

export default function UpgradePage() {
  const router = useRouter();

  const handleUpgradeClick = () => {
    router.push('/payment'); // ✅ navigate directly
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white text-foreground relative overflow-hidden">
      {/* Background subtle shapes */}
      <div className="pointer-events-none absolute -top-20 -left-40 w-[400px] h-[400px] bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300 rounded-full opacity-20 blur-2xl"></div>

      <Header />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-2 py-12 text-center relative z-10"
      >
        <h1 className="text-5xl font-extrabold mb-8 text-indigo-700 drop-shadow-md">
          Upgrade to Pro
        </h1>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-lg border border-indigo-100 rounded-3xl max-w-md mx-auto p-10 transition-transform"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-10 tracking-wide">
            What You’ll Get:
          </h2>

          <ul className="space-y-6 text-left text-gray-700">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle
                  className="text-indigo-600 flex-shrink-0 mt-1 drop-shadow"
                  size={26}
                />
                <p className="leading-relaxed text-lg">{benefit}</p>
              </li>
            ))}
          </ul>

          <Button
            className="mt-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-lg px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
            onClick={handleUpgradeClick}
          >
            Upgrade Now
          </Button>
        </motion.div>
      </motion.section>
    </main>
  );
}
