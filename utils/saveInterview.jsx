"use server";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

export async function saveInterviewToDB({
  result,
  jobPosition,
  jobDesc,
  jobExperience,
  userEmail,
}) {
  const response = await db
    .insert(MockInterview)
    .values({
      mockId: uuidv4(),
      jsonMockResp: result,
      jobPosition: jobPosition,
      jobDesc: jobDesc,
      jobExperience: jobExperience,
      createdBy: userEmail,
      createdAt: moment().format("DD-MM-YYYY"),
    })
    .returning({ mockId: MockInterview.mockId });

  return response;
}
