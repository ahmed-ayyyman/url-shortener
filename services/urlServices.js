import {
  createUrl,
  getUrlByCode,
  incrementClicks,
} from "../models/urlModels.js";
import { generateCode } from "../utils/codeGenerator.js";

export const shortenUrl = async (originalUrl) => {
  // Generate a short code
  const shortCode = generateCode();

  // Save to DB
  await createUrl(originalUrl, shortCode);
  return shortCode;
};

export const getOriginalUrl = async (code) => {
  const url = await getUrlByCode(code);
  if (!url) return null;
  await incrementClicks(code);
  return url.original_url;
};
