"use client";
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';

export default function startInterview() {
  const params = useParams();
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState();
  const[activeQuestion, setActiveQuestion] = useState(0);
  useEffect(() => {
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    if (
      result.length === 0 ||
      !result[0].jsonMockResp ||
      result[0].jsonMockResp === 'undefined'
    ) {
      return;
    }
    const cleanedJsonString = result[0].jsonMockResp.replace(/`/g, "'");
    const jsonMockResponse = JSON.parse(cleanedJsonString);
    setMockInterviewQuestions(jsonMockResponse);
    setInterviewData(result[0]);
    console.log(jsonMockResponse);
  };

  return (
     <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mx-auto items-start">
            
            {/* Questions Section */}
            <QuestionsSection 
            activeQuestion={activeQuestion}
            mockInterviewQuestions={mockInterviewQuestions} 
            />
            {/* Webcam Section */}
            <RecordAnswerSection 
                activeQuestion={activeQuestion}
                mockInterviewQuestions={mockInterviewQuestions} 
                interviewData={interviewData}
            />
        </div>
     </div>
  );
}
