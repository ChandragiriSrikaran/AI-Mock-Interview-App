'use client';
import React from 'react';
import Header from '../Dashboard/_components/Header';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Unlimited mock interviews',
  'AI-powered real-time feedback',
  'Access to detailed performance analytics',
  'Customize interview difficulty and roles',
  'Download interview reports',
];

export default function UpgradePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-4 text-center">
        <h1 className="text-4xl font-medium mb-4 text-blue-600">Upgrade to Pro</h1>

        <div className="bg-white shadow-xl rounded-2xl p-4 border border-gray-200 w-fit mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">What You’ll Get:</h2>

          <ul className="space-y-4 mb-8 text-left">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                {benefit}
              </li>
            ))}
          </ul>

          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-6 py-3 rounded-lg">
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  );
}
