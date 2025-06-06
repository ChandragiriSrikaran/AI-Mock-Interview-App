"use client";

import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Welcome to <span className="text-blue-600">Your Project</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Build, learn, and grow with our powerful tools designed to boost your productivity and help you succeed.
          </p>
          <div className="flex gap-4">
            <a
              href="#get-started"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80"
            alt="Hero"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </header>

      {/* Features Section */}
      <section
        id="features"
        className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <FeatureCard
          icon={
            <svg
              className="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L15 12l-5.25-5"
              />
            </svg>
          }
          title="Easy to Use"
          description="Intuitive design that lets you focus on what matters."
        />

        <FeatureCard
          icon={
            <svg
              className="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m2-4h.01M12 18h.01"
              />
            </svg>
          }
          title="Secure"
          description="We prioritize your security and privacy."
        />

        <FeatureCard
          icon={
            <svg
              className="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h6m-3 8h.01M12 16h.01"
              />
            </svg>
          }
          title="24/7 Support"
          description="Always here to help, anytime you need."
        />
      </section>

      {/* Call To Action */}
      <section
        id="get-started"
        className="bg-blue-600 text-white py-16 flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
          Ready to get started?
        </h2>
        <p className="max-w-xl text-center mb-8 text-lg">
          Join thousands of users who trust our platform to improve their workflow.
        </p>
        <a
          href="/signup"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-gray-100 transition"
        >
          Create an Account
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Project. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
      <div className="mx-auto">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
