import OrderModel from "../models/orderModel.js";
import { type OrderInterface } from "../interfaces/orderInterface.js";

const createOrder = async (order: OrderInterface) => {
  const responseOrder = await OrderModel.create(order);
  return responseOrder;
};

const getOrder = async (id: string) => {
  const responseOrder = await OrderModel.findById(id);
  return responseOrder;
};

const getOrders = async () => {
  const responseOrders = await OrderModel.find();
  return responseOrders;
};

const updateOrder = async (id: string, order: Partial<OrderInterface>) => {
  const responseOrder = await OrderModel.findByIdAndUpdate(id, order, {
    new: true,
  });
  return responseOrder;
};

const deleteOrder = async (id: string) => {
  const responseOrder = await OrderModel.findByIdAndDelete(id);
  return responseOrder;
};

export { createOrder, getOrder, getOrders, updateOrder, deleteOrder };
