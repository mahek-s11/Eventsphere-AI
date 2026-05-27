import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { interests } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
A user is interested in:

${interests}

Suggest 5 events they would enjoy.

For each event:
- Give an event name
- Give a short description
- Explain why it matches their interests

Format the response neatly.
`;

    const result = await model.generateContent(prompt);

    return NextResponse.json({
      recommendations: result.response.text(),
    });
  } catch (error) {
  console.error(error);

  return NextResponse.json({
    recommendations: `
🎯 Recommended Events

1. AI Innovation Summit
   Explore cutting-edge AI trends, tools, and applications.

2. Startup Founders Meetup
   Connect with entrepreneurs, investors, and innovators.

3. Tech Connect Pune
   Discover emerging technologies and network with developers.

4. Future of AI Conference
   Learn from industry experts about the future of artificial intelligence.

5. Innovation & Entrepreneurship Expo
   Perfect for startup enthusiasts and business-minded professionals.
    `,
  });
}
}