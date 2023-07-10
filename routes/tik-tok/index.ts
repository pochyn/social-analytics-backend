import express from "express";
import { getUserProfile } from "./getUserProfile";

const router = express.Router();

// Using routes
router.get("/profile", getUserProfile);

export default router;
