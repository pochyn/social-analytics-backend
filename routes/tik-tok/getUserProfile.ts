import { NextFunction, Request, Response } from "express";

export const getUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).send("hi there");
  } catch (error) {
    return res.status(400).send(`Error getting profile`);
  }
};
