import { Router, type Request, type Response } from "express";
import {
  deleteItem,
  getItem,
  postItem,
  getItems,
  updateItem,
} from "../controllers/cars.js";
import logMiddleware from "../middleware/log.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", logMiddleware, getItem);
router.put("/:id", updateItem);
router.post("/", postItem);
router.delete("/:id", deleteItem);

export { router };
