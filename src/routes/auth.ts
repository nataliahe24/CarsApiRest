import { Router } from "express";
import { register, login } from "../controllers/auth.js";

const router = Router();
// localhost:3000/auth/login
// localhost:3000/auth/register
router.post("/login", login);
router.post("/register", register);

export { router };
