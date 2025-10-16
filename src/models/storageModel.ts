import { Schema, model } from "mongoose";
import { type StorageInterface } from "../interfaces/storageInterface.js";

const StorageSchema = new Schema<StorageInterface>(
  {
    fileName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StorageModel = model("Storage", StorageSchema);
export default StorageModel;
