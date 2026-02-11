import { shortenUrl, getOriginalUrl } from "../services/urlServices.js";

export const postShorten = async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).json({ message: "URL is required" });

  try {
    const shortCode = await shortenUrl(originalUrl);
    res.json({ shortUrl: `${req.protocol}://${req.get("host")}/${shortCode}` });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getRedirect = async (req, res) => {
  const { code } = req.params;

  try {
    const originalUrl = await getOriginalUrl(code);
    if (!originalUrl) return res.status(404).json({ message: "URL not found" });

    res.redirect(originalUrl);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
