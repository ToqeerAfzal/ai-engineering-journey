import { z } from "zod";

export const AnalysisSchema = z.object({
  summary: z.string(),

  sentiment: z.enum([
    "positive",
    "negative",
    "neutral",
  ]),

  topics: z.array(z.string()).max(3),

  insights: z.array(z.string()).min(1).max(3),
});

export type Analysis = z.infer<typeof AnalysisSchema>;