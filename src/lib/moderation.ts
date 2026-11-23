/** Longest message `/api/moderate` accepts, in characters. */
export const MODERATION_MAX_INPUT_LENGTH = 2000;

/** Response body of `POST /api/moderate`. */
export interface ModerationResult {
  id: string;
  /** The flagged OpenAI moderation category, or "fine" when nothing was flagged. */
  category: string;
}
