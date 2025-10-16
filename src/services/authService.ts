import { type AuthInterface } from "../interfaces/authInterface.js";
import UserModel from "../models/userModel.js";
import { type UserInterface } from "../interfaces/userInterface.js";
import { encryptPassword, verifyPassword } from "../utils/passwordEncoder.js";
import { generateToken } from "../utils/jwt.handle.js";

const registerNewUser = async ({
  email,
  password,
  name,
  lastName,
}: UserInterface) => {
  const responseUser = await UserModel.findOne({ email });
  if (responseUser) {
    return "User already exists";
  }
  const hashedPassword = await encryptPassword(password);
  const newUser = await UserModel.create({
    email,
    password: hashedPassword,
    name,
    lastName,
  });
  return newUser;
};
const loginUser = async (user: AuthInterface) => {
  const responseUser = await UserModel.findOne({ email: user.email });
  if (!responseUser) {
    return "User not found";
  }
  const isMatch = await verifyPassword(user.password, responseUser.password);
  if (!isMatch) {
    return "Invalid password";
  }
  const token = generateToken(responseUser.email);
  const data = {
    token,
    user: responseUser,
  };
  return data;
};

export { registerNewUser, loginUser };
