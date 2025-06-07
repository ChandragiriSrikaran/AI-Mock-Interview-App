'use client';

import React from 'react';
import Header from '../Dashboard/_components/Header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white text-foreground">
      <Header />

      <section className="max-w-2xl mx-auto px-6 py-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Complete Your Payment
        </motion.h1>

        <p className="text-muted-foreground text-lg mb-4">
          Unlock all Pro features by completing a secure payment below.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-muted p-8 rounded-2xl shadow-sm text-left max-w-md mx-auto"
        >
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 rounded-lg border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-3 rounded-lg border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
              <input
                type="password"
                placeholder="123"
                className="w-full p-3 rounded-lg border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <Button size="lg" className="w-full rounded-xl text-base bg-indigo-600 hover:bg-indigo-700">
            Pay ₹499
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
