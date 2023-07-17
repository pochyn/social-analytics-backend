import { NextFunction, Request, Response } from "express";
import { getUserProfileAnalytics } from "../../clients/apify_client/apifyClient";
require("dotenv").config();

export const getUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await getUserProfileAnalytics(req.body.profiles);
    return res.status(200).send(response);
  } catch (error) {
    console.error(error);
    return res.status(400).send(`Error getting profile, ${error}`);
  }
};
