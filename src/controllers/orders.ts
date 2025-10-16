import { type Response, type Request } from "express";
import { errorHandle } from "../utils/error.handle.js";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../services/orderService.js";

const getOrdersCtrl = async (_req: Request, res: Response) => {
  try {
    const response = await getOrders();
    res.send(response);
  } catch (error) {
    errorHandle(res, "ERROR_GET_ORDERS", error);
  }
};

const getOrderCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getOrder(id as string);
    const data = response ? response : { message: "Order not found" };
    res.send(data);
  } catch (error) {
    errorHandle(res, "ERROR_GET_ORDER", error);
  }
};

const updateOrderCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await updateOrder(id as string, req.body);
    res.send(response);
  } catch (error) {
    errorHandle(res, "ERROR_UPDATE_ORDER", error);
  }
};

const postOrderCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createOrder(body);
    res.send(response);
  } catch (error) {
    errorHandle(res, "ERROR_POST_ORDER", error);
  }
};

const deleteOrderCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteOrder(id as string);
    res.send(response);
  } catch (error) {
    errorHandle(res, "ERROR_DELETE_ORDER", error);
  }
};

export {
  getOrdersCtrl,
  getOrderCtrl,
  updateOrderCtrl,
  postOrderCtrl,
  deleteOrderCtrl,
};
