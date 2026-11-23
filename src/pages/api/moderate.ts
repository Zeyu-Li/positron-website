import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { env } from "~/env";
import {
  MODERATION_MAX_INPUT_LENGTH,
  type ModerationResult,
} from "~/lib/moderation";

const OPENAI_MODERATION_URL = "https://api.openai.com/v1/moderations";
const UPSTREAM_TIMEOUT_MS = 10_000;

export const config = {
  api: { bodyParser: { sizeLimit: "16kb" } },
};

const requestSchema = z.object({
  input: z.string().trim().min(1).max(MODERATION_MAX_INPUT_LENGTH),
});

const openAiModerationResultSchema = z.object({
  flagged: z.boolean(),
  categories: z.record(z.string(), z.boolean()),
});

const openAiModerationSchema = z.object({
  id: z.string(),
  // One result per input; we always send exactly one.
  results: z.tuple(
    [openAiModerationResultSchema],
    openAiModerationResultSchema,
  ),
});

interface ErrorBody {
  error: string;
}

/**
 * Checks a message with the OpenAI Moderation API. The API key stays on the server; the browser only
 * ever talks to this route.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ModerationResult | ErrorBody>,
): Promise<void> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const request = requestSchema.safeParse(req.body);
  if (!request.success) {
    return res.status(400).json({
      error: `Expected a JSON body { "input": string } of 1 to ${MODERATION_MAX_INPUT_LENGTH} characters`,
    });
  }

  try {
    const upstream = await fetch(OPENAI_MODERATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({ input: request.data.input }),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    if (!upstream.ok) {
      throw new Error(`OpenAI responded with ${upstream.status}`);
    }

    const moderation = openAiModerationSchema.parse(await upstream.json());
    const [result] = moderation.results;
    const flaggedCategories = Object.entries(result.categories)
      .filter(([, flagged]) => flagged)
      .map(([category]) => category);
    const category = result.flagged
      ? (flaggedCategories.at(-1) ?? "fine")
      : "fine";

    return res.status(200).json({ id: moderation.id, category });
  } catch (error) {
    console.error("OpenAI moderation request failed:", error);
    return res.status(502).json({ error: "Moderation service unavailable" });
  }
}
