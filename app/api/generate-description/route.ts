import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  const { eventName, category, location } =
    await req.json();

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Generate a professional event listing for the following event.

Event Name: ${eventName}
Category: ${category}
Location: ${location}

Format the response exactly like this:

📍 Venue: ${location}

About the Event:
Write 2-3 engaging paragraphs describing the event, its purpose, and what attendees can expect.

Event Highlights:
• Highlight 1
• Highlight 2
• Highlight 3
• Highlight 4

Who Should Attend?
Write a short paragraph describing the target audience.

End with a short call-to-action encouraging users to attend.

Keep the content professional, realistic, and suitable for an event management platform.
`;

    const result = await model.generateContent(
      prompt
    );

    const description =
      result.response.text();

    return NextResponse.json({
      description,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      description: `
📍 Venue: ${location}

About the Event:
${eventName} is an exciting ${category} event designed to bring together enthusiasts, professionals, and curious learners. Attendees will have the opportunity to explore new ideas, connect with like-minded people, and enjoy a memorable experience.

Event Highlights:
• Expert speakers and sessions
• Networking opportunities
• Interactive activities
• Exciting experiences and discussions

Who Should Attend?
Anyone interested in ${category}, innovation, learning, and community engagement.

Book your tickets now and be part of this amazing event!
`,
    });
  }
}