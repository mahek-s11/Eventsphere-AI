import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

const prompt = `
You are EventSphere AI Assistant.

Available events on the platform:

1. AI Hackathon Pune
Category: Technology
Location: Pune
Description: AI competition, networking, innovation, machine learning.

2. Startup Summit
Category: Business
Location: Pune
Description: Entrepreneurship, startups, networking, innovation.

3. Music Fest
Category: Entertainment
Location: Pune
Description: Live music, performances, entertainment.

When users ask for recommendations, prioritize recommending events from the platform above.

Question:
${question}

Answer in a professional and helpful way.

When recommending events:
- Mention the event name.
- Mention category and location.
- Explain why the event is recommended.
- Explain benefits for the user.
- Use bullet points when appropriate.

Provide 1-2 short paragraphs rather than a single sentence.
`;

    const result =
      await model.generateContent(prompt);

    return NextResponse.json({
      response: result.response.text(),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      response:
        "I'm currently unavailable. Please try again later.",
    });
  }
}