import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function generateInterviewQuestions({ jobPosition, jobDesc, jobExperience }) {
  const inputPrompt = `
    Generate 5 technical interview questions and answers for the following role.

    Role: ${jobPosition}
    Job Description: ${jobDesc}
    Required Experience: ${jobExperience}

    Return them in the following JSON format:
    [
      {
        "question": "Your question here",
        "answer": "Detailed answer here"
      }
    ]
  `;

  try {
    // Initialize the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate content based on the input prompt
    const result = await model.generateContent(inputPrompt);
    const response = await result.response;
    let text = await response.text();

    // Clean the response to remove Markdown code block wrappers if present
    text = text.trim().replace(/^```(?:json)?\n/, "").replace(/\n```$/, "");

    // Try parsing the cleaned text into JSON
    const parsed = JSON.parse(text);

    // Check if the parsed response is in the expected array format
    if (Array.isArray(parsed)) {
      return parsed;  // Return the parsed questions and answers
    } else {
      throw new Error("Unexpected response format: Expected an array of questions and answers.");
    }

  } catch (error) {
    console.error("Error generating interview questions:", error);
    throw error;  // Rethrow the error after logging it
  }
}
