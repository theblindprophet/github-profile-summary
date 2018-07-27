import mongoose from "mongoose";
import { logger } from "../../lib/config";
import { Request, Response } from "express";

const User = mongoose.model("User");

const postUser = async (req: Request, res: Response) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json({ _id: savedUser._id });
  } catch (e) {
    logger.error("Failed to create new user", e);
    res.status(422).send({});
  }
};

const getUser = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const user = await User.findOne({ _id });
    res.status(200).json(user);
  } catch (e) {
    logger.error(`Failed to get user with id ${_id}`, e);
    res.status(404).send({});
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find(req.query);
    res.status(200).json(users);
  } catch (e) {
    logger.error(`Failed to get users`, e);
    res.status(404).send({});
  }
};

export default {
  postUser,
  getUser,
  getUsers
};
