import express from "express";
import "../models/user";
import userController from "./userController";
import userValidator from "./validators/user";

const router = express.Router();

// User routes
router.get("/user", userValidator.getAllUsers, userController.getUsers);
router.get("/user/:id", userValidator.getUser, userController.getUser);
router.post("/user", userValidator.postUser, userController.postUser);
router.put("/user/:id", userValidator.putUser, userController.putUser);
router.delete("/user/:id", userValidator.deleteUser, userController.deleteUser);


export default router;
