export interface OrderItemInterface {
  productId: string;
  quantity: number;
  price: number;
}

export type OrderStatus =
  | "pending"
  | "paid"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderInterface {
  userId: string;
  items: OrderItemInterface[];
  total: number;
  status: OrderStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
