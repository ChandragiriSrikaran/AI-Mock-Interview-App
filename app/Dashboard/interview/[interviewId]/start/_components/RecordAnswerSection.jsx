import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import moment from "moment";
import { UserAnswer } from "@/utils/schema";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

function RecordAnswerSection({
  activeQuestion,
  mockInterviewQuestions,
  interviewData,
}) {
  const [userAnswer, setUserAnswer] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { user } = useUser();
  const resultStartIndex = useRef(0); // To track start of new results

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    const newResults = results.slice(resultStartIndex.current);
    newResults.forEach((result) => {
      setUserAnswer((prev) => prev + " " + result?.transcript);
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      console.log("Final Answer:", userAnswer);
      console.log("Results:", results);
    } else {
      setUserAnswer(""); //Clear previous answer
      resultStartIndex.current = results.length; // Start tracking new results
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);
    const feedbackPrompt = `
    You are an experienced interview coach. Your goal is to provide specific and actionable feedback to help candidates improve their interview skills.

    Question: ${mockInterviewQuestions[activeQuestion]?.question}

    Candidate's Answer: ${userAnswer}

    ${
      mockInterviewQuestions[activeQuestion]?.expectedAnswer
        ? `Expected Answer/Key Elements: ${mockInterviewQuestions[activeQuestion].expectedAnswer}`
        : ""
    }

    Analyze the candidate's answer in comparison to the expected answer (if provided). Focus on clarity, completeness, and correctness.

    Return your response strictly in JSON format with only the following two fields:

    {
      "feedback": "Provide specific, helpful feedback in 3 to 5 lines. Highlight strengths and areas for improvement related to clarity, completeness, and correctness. Be direct and constructive.",
      "rating": "A number from 1 to 5 based on the overall quality of the answer, where 5 is excellent (exceeded expectations), 3 is satisfactory (met expectations), and 1 is poor (did not meet expectations)."
    }`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(feedbackPrompt);
      const response = await result.response;
      let text = await response.text();
      text = text.trim().replace(/^```(?:json)?\n/, "").replace(/\n```$/, "");
      const jsonFeedbackResponse = JSON.parse(text);
      console.log("Parsed JSON:", jsonFeedbackResponse);

      const resp = await db
        .insert(UserAnswer)
        .values({
          mockIdRef: interviewData?.mockId,
          question: mockInterviewQuestions[activeQuestion]?.question,
          correctAns: mockInterviewQuestions[activeQuestion]?.answer,
          UserAns: userAnswer,
          feedback: jsonFeedbackResponse.feedback,
          rating: jsonFeedbackResponse.rating,
          userEmail: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("YYYY-MM-DD"),
        })
        .catch((error) => {
          console.error("Insert Error:", error);
        });

      if (resp) {
        toast.success("Answer saved successfully!");
      }

      setUserAnswer("");
      setLoading(false);
    } catch (error) {
      console.error("Error parsing the response:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="my-4 flex flex-col items-center justify-center w-full max-w-3xl mx-auto p-4 border rounded-lg bg-black shadow-sm">
        <div className="absolute bg-black">
          <Image src="/image.png" alt="Record Answer" width={180} height={180} />
        </div>

        <Webcam
          mirrored={true}
          style={{
            width: "100%",
            height: 250,
            zIndex: 10,
          }}
        />
      </div>

      <Button
        disabled={loading}
        variant="outline"
        onClick={StartStopRecording}
        className={`my-0 px-6 py-2 rounded-2xl font-semibold text-lg shadow-md transition-all duration-300 flex items-center gap-3 
          ${
            isRecording
              ? "bg-red-50 text-red-600 border-red-500 hover:bg-red-100"
              : "bg-blue-50 text-blue-600 border-blue-500 hover:bg-blue-100"
          }`}
      >
        <Mic
          className={`w-5 h-5 ${
            isRecording ? "animate-pulse text-red-600" : "text-blue-600"
          }`}
        />
        <span>{isRecording ? "Stop Recording" : "Record Answer"}</span>
      </Button>
    </div>
  );
}

export default RecordAnswerSection;
