"use client";
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from "next/link";

export default function startInterview() {
  const params = useParams();
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState([]); // Initialize as an empty array
  const [activeQuestion, setActiveQuestion] = useState(0);

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
    const cleanedJsonString = result[0].jsonMockResp.replace(/`/g, "'"); // clean the response string
    const jsonMockResponse = JSON.parse(cleanedJsonString);
    setMockInterviewQuestions(jsonMockResponse); // Set the fetched data
    setInterviewData(result[0]);
    console.log(jsonMockResponse);
  };

  return (
    <div className="max-w-3xl mx-auto px-2 py-4">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Questions Section with larger height */}
        <div className="w-full flex flex-col">
          <div className="flex-grow max-h-[calc(100vh-200px)]"> {/* Adjust the height of questions section */}
            <QuestionsSection
              activeQuestion={activeQuestion}
              mockInterviewQuestions={mockInterviewQuestions}
            />
          </div>
        </div>
  
        {/* Webcam Section with restricted height */}
        <div className="w-full flex flex-col">
        <div className="flex-grow max-h-[50vh]">
            <RecordAnswerSection
              activeQuestion={activeQuestion}
              mockInterviewQuestions={mockInterviewQuestions}
              interviewData={interviewData}
            />
          </div>
        </div>
      </div>
  
      {/* Buttons positioned below */}
      <div className="flex justify-end items-center gap-4 mt-14">
        {activeQuestion > 0 && (
          <Button onClick={()=>setActiveQuestion(activeQuestion-1)}>Previous Question</Button>
        )}
        {activeQuestion < mockInterviewQuestions.length - 1 && (
          <Button onClick={()=>setActiveQuestion(activeQuestion+1)}>Next Question</Button>
        )}
        {mockInterviewQuestions.length > 0 &&
          activeQuestion === mockInterviewQuestions.length - 1 && (
            <Link href={`/Dashboard/interview/${interviewData?.mockId}/feedback`}><Button className="text-sm py-2 px-4">End Interview</Button></Link>
          )}
      </div>
    </div>
  );
  
  
  
}
