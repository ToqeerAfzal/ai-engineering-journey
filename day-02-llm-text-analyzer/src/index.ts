
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GROQ_API_KEY;
const model = process.env.GROQ_MODEL;

if (!apiKey || !model) {
  throw new Error("Missing GROQ_API_KEY or GROQ_MODEL in .env");
}

const groq = new Groq({ apiKey });

async function analyzeText(text: string) {
  try {
    const completion = await groq.chat.completions.create({
      model,
      messages: [
        {
          role: "system",
          content: `
            You are a professional text analyzer.

            Analyze the user's text and provide:
            1. A short summary
            2. Sentiment (Positive, Negative, or Neutral)
            3. Main topics
            4. Key insights

            Keep the response clear and structured.
          `,
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.3,
    });

    const result = completion.choices[0]?.message?.content;

    if (!result) {
      throw new Error("The model returned an empty response.");
    }

    return {
      result,
      model: completion.model,
      usage: completion.usage,
    };
  } catch (error) {
    console.error("AI analysis failed:", error);
    throw error;
  }
}

async function main() {
  const input = process.argv.slice(2).join(" ");

  if (!input.trim()) {
    console.log('Usage: npm run dev -- "Your text here"');
    return;
  }

  const analysis = await analyzeText(input);

  console.log("\n========== TEXT ANALYSIS ==========\n");
  console.log(analysis.result);

  console.log("\n========== MODEL INFORMATION ==========\n");
  console.log("Model:", analysis.model);
  console.log("Token usage:", analysis.usage);
}

main().catch(() => {
  process.exitCode = 1;
});
