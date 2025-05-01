"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam"; // ✅ use the real webcam component
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
    <div className="my-10 px-6 flex flex-col items-center justify-center">
      <h2 className="font-bold text-3xl text-primary mb-4">
        Let's Get Started
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        <div className="w-full max-w-md">
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
            <div className="h-64 w-full p-6 bg-secondary rounded-lg border flex flex-col items-center justify-center gap-4">
              <WebcamIcon className="w-16 h-16 text-muted" />
              <p className="text-sm text-muted-foreground text-center">
                To begin, please enable your webcam and microphone.
              </p>
              <Button
                variant="default"
                onClick={() => setWebcamEnable(true)}
                className="mt-2"
              >
                Enable Webcam & Mic
              </Button>
            </div>
          )}
        </div>

        {/* ✅ Manually displaying interviewData */}
        {interviewData ? (
          <div className="mt-6 space-y-4 text-center">
            <h2><strong>Job Position:</strong> {interviewData.jobPosition}</h2>
            <h2><strong>Job Description:</strong> {interviewData.jobDesc}</h2>
            <h2><strong>Experience Required:</strong> {interviewData.jobExperience}</h2>
          </div>
        ): <h2>Loading Data...</h2>
        }
      </div>
    </div>
  );
}

export default Interview;
