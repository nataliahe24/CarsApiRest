import { Router } from "express";
import {
  deleteOrderCtrl,
  getOrderCtrl,
  getOrdersCtrl,
  postOrderCtrl,
  updateOrderCtrl,
} from "../controllers/orders.js";
import { loginMiddleware } from "../middleware/login.js";

const router = Router();

router.get("/", loginMiddleware, getOrdersCtrl);
router.get("/:id", loginMiddleware, getOrderCtrl);
router.put("/:id", loginMiddleware, updateOrderCtrl);
router.post("/", loginMiddleware, postOrderCtrl);
router.delete("/:id", loginMiddleware, deleteOrderCtrl);

export { router };
