import { logger } from "../../lib/config";
import { Request, Response } from "express";
import { getUserData as getData } from "../services/githubService";

const getUserData = async (req: Request, res: Response) => {
  const { userName } = req.params;
  try {
    const userData = await getData(userName);
    res.status(200).send(userData.data.user);
  } catch (e) {
    logger.error(`Failed to get github user data with userName ${userName}`, e);
    res.status(500).send(e);
  }
};

export default {
  getUserData
};
