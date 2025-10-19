import { Schema, model } from "mongoose";
import "dotenv/config";
import { type UserInterface } from "../interfaces/userInterface.js";

const UserSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model("User", UserSchema);
export default UserModel;
