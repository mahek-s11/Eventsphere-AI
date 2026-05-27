import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { eventName, category, location } =
      await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Generate a professional event description.

Event Name: ${eventName}
Category: ${category}
Location: ${location}

Write a compelling event description in 100-150 words.
`;

    const result = await model.generateContent(prompt);

    const description =
      result.response.text();

    return NextResponse.json({
      description,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate description" },
      { status: 500 }
    );
  }
}