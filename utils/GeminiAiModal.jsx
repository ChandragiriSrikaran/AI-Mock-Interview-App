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
    try {
      const parsed = JSON.parse(text);
    
      // Format the parsed data into an array of objects with `question` and `answer`
      const formattedResponse = parsed.map(item => ({
        question: item.question,
        answer: item.answer
      }));
    
      // Convert the formatted response into a JSON string to store in the database
      const responseString = JSON.stringify(formattedResponse);
    
      // Log the stringified response (for debugging purposes)
      console.log('Response string to store in DB:', responseString);
    
      // Now, you can store `responseString` into your database
      return responseString;  // Return the response string for further processing or storage
    
    } catch (error) {
      console.error('Error parsing response:', error);
    }
  } catch (error) {
    console.error('Error generating interview questions:', error);
  }
}
