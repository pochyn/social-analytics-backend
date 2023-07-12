import { NextFunction, Request, Response } from "express";
import { hashtagAnalytics } from "../../clients/apify_client/apifyClient";

export const getHashtagAnalytics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await hashtagAnalytics(req.body.hashtags);
    return res.status(200).send(response);
  } catch (error) {
    console.error(error);
    return res.status(400).send(`Error getting hashtags, ${error}`);
  }
};
