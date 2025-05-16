import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionsSection({ mockInterviewQuestions = [], activeQuestion = 0 }) {

  const textToSpeech = (text) => {
    if('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    }else {
      alert("Your browser does not support text-to-speech.");
    }
  };

  // Check if there are no questions
  if (!mockInterviewQuestions.length) {
    return (
      <div className="text-center text-gray-500 py-6">
        No interview questions found.
      </div>
    );
  }

  return (
    <div className="my-4 w-full max-w-3xl mx-auto p-4 border rounded-lg bg-white shadow-sm">
      {/* Question Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
        {mockInterviewQuestions.map((_, ind) => (
          <div
            key={ind}
            className={`py-1 px-2 rounded-full text-xs sm:text-sm text-center cursor-pointer transition-colors ${
              activeQuestion === ind
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            Question {ind + 1}
          </div>
        ))}
      </div>
  
      {/* Current Question */}
      <h2 className="text-sm sm:text-md font-medium mb-3 leading-snug text-gray-900">
        {mockInterviewQuestions[activeQuestion]?.question}
      </h2>
      <Volume2
        className="cursor-pointer"
        onClick={() =>
          textToSpeech(mockInterviewQuestions[activeQuestion]?.question)
        }
      />
  
      {/* Tip Box */}
      <div className="border rounded-lg p-3 bg-blue-100">
        <div className="flex gap-2 items-center text-blue-700 font-semibold mb-1">
          <Lightbulb size={16} />
          <span>Note:</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-700 leading-snug">
          {process.env.NEXT_PUBLIC_TIP ||
            "Click on Record Answer when you are ready to answer the question. At the end of interview we will give the feedback along with correct answer for each question and your answer to compare it."}
        </p>
      </div>
    </div>
  );
}

export default QuestionsSection;