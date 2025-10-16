import StorageModel from "../models/storageModel.js";
import { type StorageInterface } from "../interfaces/storageInterface.js";

const registerUpload = async ({ fileName, path, userId }: StorageInterface) => {
  const responseStorage = await StorageModel.create({ fileName, path, userId });
  return responseStorage;
};

const getStorage = async (id: string) => {
  const responseStorage = await StorageModel.findById(id);
  return responseStorage;
};

export { registerUpload, getStorage };
