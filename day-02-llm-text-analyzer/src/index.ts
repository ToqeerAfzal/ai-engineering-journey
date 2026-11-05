
import Groq from "groq-sdk";
import dotenv from "dotenv";

import {
  ZERO_SHOT_PROMPT,
  FEW_SHOT_PROMPT,
} from "./prompts.js";

dotenv.config();

const apiKey = process.env.GROQ_API_KEY;
const model = process.env.GROQ_MODEL;

if (!apiKey || !model) {
  throw new Error("Missing GROQ_API_KEY or GROQ_MODEL in .env");
}

const groq = new Groq({ apiKey });

type PromptType = "zero-shot" | "few-shot";

async function analyzeText(
  text: string,
  promptType: PromptType = "zero-shot"
) {
  const systemPrompt =
    promptType === "few-shot"
      ? FEW_SHOT_PROMPT
      : ZERO_SHOT_PROMPT;

  const completion = await groq.chat.completions.create({
    model: process.env.GROQ_MODEL!,
    temperature: 0.2,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: `Analyze the following text:\n\n${text}`,
      },
    ],
  });

  return completion.choices[0]?.message?.content ?? "";
}

async function main() {
  const sampleText = `
  The new project management application is excellent.
  It is easy to use, helps our team communicate,
  and has improved our productivity.
  `;

  const zeroShotResult = await analyzeText(sampleText, "zero-shot");
  const fewShotResult = await analyzeText(sampleText, "few-shot");

  console.log("\n--- ZERO-SHOT RESULT ---");
  console.log(zeroShotResult);

  console.log("\n--- FEW-SHOT RESULT ---");
  console.log(fewShotResult);
}

main().catch(() => {
  process.exitCode = 1;
});
