import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function generateInterviewQuestions({ jobPosition, jobDesc, jobExperience }) {
  const inputPrompt = `Generate 5 technical interview questions and answers for the following role.

Role: ${jobPosition}
Job Description: ${jobDesc}
Required Experience: ${jobExperience}

Return them in the following JSON format:
[
  {
    "question": "Your question here",
    "answer": "Detailed answer here"
  }
]`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(inputPrompt);
    const response = await result.response;
    let text = await response.text();

    // Log the raw response for debugging purposes
    // console.log("Raw response from AI:", text);

    // ✅ Remove Markdown code block wrappers like ```json ... ```
    text = text.trim().replace(/^```(?:json)?\n/, "").replace(/\n```$/, "");
    return text;
    // Log the cleaned text before parsing
    // console.log("Cleaned response text:", text);

    // Try parsing and ensure it's valid JSON
    const parsed = JSON.parse(text);

    // Check if parsed is in the correct format and return the parsed response
    if (Array.isArray(parsed)) {
      return parsed;  // Return the parsed questions and answers directly
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error generating interview questions:", error);
    throw error;
  }
}
