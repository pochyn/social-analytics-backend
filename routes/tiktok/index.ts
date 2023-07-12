import express from "express";
import { getUserProfile } from "./getUserProfile";
import { getHashtagAnalytics } from "./getHashtagAnalytics";

const router = express.Router();

// Using routes
router.post("/profile", getUserProfile);
router.post("/hashtags", getHashtagAnalytics);

export default router;
