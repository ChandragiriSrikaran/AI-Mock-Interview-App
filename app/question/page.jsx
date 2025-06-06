'use client'
import React from 'react'
import Header from '../Dashboard/_components/Header';

function Page() {
  // Card components with hover effects
  const QuestionTypeCard = ({ number, title, chdescription }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
      <h2 className="text-2xl font-semibold mb-3 text-indigo-600 flex items-center">
        <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
          {number}
        </span>
        {title}
      </h2>
      <p className="text-gray-700">
        {chdescription}
      </p>
    </div>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              About the Interview Questions
            </h1>
            
            <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-12">
              Our AI-powered platform generates a wide variety of interview questions tailored to your job role and skill level. Here's what you can expect:
            </p>
          </div>

          <section className="max-w-5xl mx-auto space-y-6">
            <QuestionTypeCard 
              number="1"
              title="Multiple Choice Questions (MCQs)"
              description="Quick questions that test your fundamental knowledge. MCQs help sharpen your conceptual understanding under time constraints."
            />
            
            <QuestionTypeCard 
              number="2"
              title="Verbal & Behavioral Questions"
              description="Questions designed to evaluate your communication skills, problem-solving approach, and cultural fit. Prepare to explain your thought process clearly."
            />
            
            <QuestionTypeCard 
              number="3"
              title="Coding & Technical Problems"
              description="Real-world coding challenges to test your programming skills, algorithms, and data structure knowledge. The AI adapts difficulty based on your level."
            />
            
            <QuestionTypeCard 
              number="4"
              title="Personalized & Adaptive Questions"
              description="Our AI learns from your responses and tailors questions to target your weak areas, helping you improve efficiently over time."
            />
          </section>

          <div className="text-center mt-16">
            <button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto"
              onClick={() => alert('Redirect to interview starting page')}
            >
              <span className="mr-2">Ready to Practice? Start Interview</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page