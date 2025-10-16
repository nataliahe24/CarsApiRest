import { Router } from "express";
import { muiterMiddleware } from "../middleware/file.js";
import { getFile } from "../controllers/upload.js";
import { loginMiddleware } from "../middleware/login.js";

const router = Router();

router.post("/", loginMiddleware, muiterMiddleware.single("file"), getFile);

export { router };
