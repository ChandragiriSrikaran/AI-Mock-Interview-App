'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { useRouter } from 'next/navigation';

export default function LandingPageRender() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/Dashboard');
  };

  // Prevent hydration mismatch on mount
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white text-foreground">
      {/* Hero Section */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[length:30px_30px]" />

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            AI Mock Interview Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Simulate real interviews. Get AI-generated questions and receive feedback after your interview. Level up your confidence.
          </p>
          <Button
            size="lg"
            onClick={handleGetStarted}
            className="rounded-xl text-base px-6 py-3 hover:scale-[1.05] transition-transform text-white"
          >
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Use Our Platform?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Generated Questions',
                desc: 'Get realistic, role-specific interview questions generated by advanced AI.',
              },
              {
                title: 'Post-Interview Suggestions',
                desc: 'Receive detailed feedback and suggestions after completing each interview session.',
              },
              {
                title: 'Overall Interview Rating',
                desc: 'Understand your performance with a clear rating summarizing your interview quality.',
              },
            ].map(({ title, desc }) => (
              <motion.div
                key={title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl shadow-sm bg-muted hover:shadow-lg transition-all"
              >
                <CheckCircle className="text-indigo-600 mb-4" size={28} />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
          <p className="text-lg mb-6">Start practicing with AI today. It’s free and effective.</p>
          <Button
            className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl text-base hover:bg-gray-100 transition"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
