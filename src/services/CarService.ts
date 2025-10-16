import CarModel from "../models/cartModel.js";
import { type CarInterface } from "../interfaces/carInterface.js";

const createCar = async (Car: CarInterface) => {
  const responseCar = await CarModel.create(Car);
  return responseCar;
};

const getCar = async (id: string) => {
  const responseCar = await CarModel.findById(id);
  return responseCar;
};

const getCars = async () => {
  const responseCars = await CarModel.find();
  return responseCars;
};

const updateCar = async (id: string, Car: CarInterface) => {
  const responseCar = await CarModel.findByIdAndUpdate(id, Car, { new: true });
  return responseCar;
};

const deleteCar = async (id: string) => {
  const responseCar = await CarModel.findByIdAndDelete(id);
  return responseCar;
};

export { createCar, getCar, getCars, updateCar, deleteCar };
