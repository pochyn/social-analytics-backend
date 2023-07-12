import express from "express";
import { getUserProfile } from "./getUserProfile";
import { getHashtagAnalytics } from "./getHashtagAnalytics";

const router = express.Router();

// Using routes
router.get("/profile", getUserProfile);
router.get("/hashtags", getHashtagAnalytics);

export default router;
