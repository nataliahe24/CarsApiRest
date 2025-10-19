import { Schema, model } from "mongoose";
import {
  type OrderInterface,
  type OrderItemInterface,
  type OrderStatus,
} from "../interfaces/orderInterface.js";

const OrderItemSchema = new Schema<OrderItemInterface>(
  {
    productId: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const OrderSchema = new Schema<OrderInterface>(
  {
    userId: { type: String, required: true },
    items: { type: [OrderItemSchema], required: true, default: [] },
    total: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const OrderModel = model("Order", OrderSchema);
export default OrderModel;
