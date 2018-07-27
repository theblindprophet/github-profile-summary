import express from "express";
import "../models/user";
import userController from "./userController";
import githubController from "./githubController";
import userValidator from "./validators/user";
import githubValidator from "./validators/github";

const router = express.Router();

// User routes
router.get("/user", userValidator.getAllUsers, userController.getUsers);
router.get("/user/:id", userValidator.getUser, userController.getUser);
router.post("/user", userValidator.postUser, userController.postUser);

router.get("/github/userData/:userName", githubValidator.getUserData, githubController.getUserData);


export default router;
