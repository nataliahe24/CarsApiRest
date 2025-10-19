import { Schema, model } from "mongoose";
import { GAS_TYPES, type CarInterface } from "../interfaces/carInterface.js";

const ItemSchema = new Schema<CarInterface>({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    gas: {
        type: String,
        enum: GAS_TYPES,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const ItemModel = model("Item", ItemSchema);

export default ItemModel;