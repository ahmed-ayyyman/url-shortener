import express from "express";
import { postShorten, getRedirect } from "../controllers/urlController.js";

const router = express.Router();

router.post("/shorten", postShorten);
router.get("/:code", getRedirect);

export default router;
