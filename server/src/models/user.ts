import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  email: String,
  password: String,
});
mongoose.model("User", userSchema);

export default userSchema;
