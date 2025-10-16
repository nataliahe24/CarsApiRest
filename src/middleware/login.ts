import { type Request, type Response, type NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle.js";
import { errorHandle } from "../utils/error.handle.js";
import jwt from "jsonwebtoken";
import { type RequestExt } from "../interfaces/requestExt.js";

const loginMiddleware = (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtTokenByUser = req.headers.authorization;
    const token = jwtTokenByUser?.split(" ")[1];
    const isValidToken = verifyToken(`${token}`);
    console.log({ isValidToken });
    if (!isValidToken) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      req.user = isValidToken as { id: string };
    }
    next();
  } catch (error) {
    res.status(400).send({ message: "session invalidated" });
  }
};

export { loginMiddleware };
