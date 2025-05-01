"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import { WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function Interview() {
  const params = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [webcamEnable, setWebcamEnable] = useState(false);

  useEffect(() => {
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    if (result.length > 0) {
      setInterviewData(result[0]);
    } else {
      console.warn("No interview data found.");
    }
  };

  return (
    <div className="my-4 px-6 flex flex-col items-center justify-center">
      <h2 className="font-bold text-3xl text-primary mb-8 text-center">
        Let's Get Started
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mx-auto items-start">
        {/* Interview Details Card */}
        <div className="w-full max-w-md p-1 mt-0 bg-secondary rounded-lg flex flex-col items-center justify-center gap-4">
          {interviewData ? (
            <div>
              {/* Info Card */}
              <div className="w-full p-4 bg-secondary rounded-lg border flex flex-col gap-1 text-left">
                <h2>
                  <strong>Job Position:</strong> {interviewData.jobPosition}
                </h2>
                <h2>
                  <strong>Job Description:</strong> {interviewData.jobDesc}
                </h2>
                <h2>
                  <strong>Experience Required:</strong>{" "}
                  {interviewData.jobExperience}
                </h2>
              </div>

              {/* Tip Card */}
              <div className="w-full p-2  mt-3 bg-lime-100 rounded-lg border-l-4 border-yellow-400 flex flex-col gap-2 shadow">
                <div className="flex items-start gap-3">
                  <p className="text-gray-700">
                    <span
                      role="img"
                      aria-label="light-bulb"
                      className="text-yellow-500 text-2xl"
                    >
                      💡
                    </span>
                    Interviewers often assess your problem-solving approach more
                    than getting the perfect answer.
                  </p>
                </div>
                <div className="text-sm text-gray-600 border-t pt-2 italic">
                  Note: Stay calm, think aloud, and don't hesitate to ask
                  clarifying questions.
                </div>
              </div>
            </div>
          ) : (
            <h2 className="text-lg font-semibold text-gray-600 animate-pulse">
              Loading Data...
            </h2>
          )}
        </div>

        {/* Webcam Section */}
        <div className="w-full mt-1 max-w-md">
          {webcamEnable ? (
            <Webcam
              audio
              onUserMedia={() => setWebcamEnable(true)}
              onUserMediaError={() => setWebcamEnable(false)}
              style={{
                height: 300,
                width: "100%",
                borderRadius: 12,
                objectFit: "cover",
              }}
            />
          ) : (
            <div className="h-64 w-full p-6 bg-secondary rounded-lg border flex flex-col items-center justify-center gap-4 text-center shadow">
              <WebcamIcon className="w-16 h-16 text-muted" />
              <p className="text-sm text-muted-foreground">
                To begin, please enable your webcam and microphone.
              </p>
              <Button
                variant="ghost"
                onClick={() => setWebcamEnable(true)}
                className="mt-1 mb-0 p-0 my-2 w-full hover:bg-gray-300 hover:text-primary transition duration-100 ease-in-out "
              >
                Enable Webcam & Mic
              </Button>
            </div>
          )}
          <div className="flex  justify-center items-center mt-2">
            <Button className="w-full">Start</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
