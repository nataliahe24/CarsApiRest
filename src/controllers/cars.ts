import { type Response, type Request } from "express";
import { errorHandle } from "../utils/error.handle.js";
import {createCar, deleteCar, getCar, getCars, updateCar} from "../services/itemService.js";

const getItems = async (req : Request, res : Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (error) {
        errorHandle(res, "ERROR_GET_ITEMS", error);
    }
};

const getItem = async (req : Request, res : Response) => {
    try {
        const { id } = req.params;
        const response = await getCar(id as string);
        const data = response ? response : {message: "Item not found"};
        res.send(data);
    } catch (error) {
        errorHandle(res, "ERROR_GET_ITEM", error);
    }
};

const updateItem = async (req : Request, res : Response) => {
    try {
        const { id } = req.params;
        const response = await updateCar(id as string, req.body);
        res.send(response);
    } catch (error) {
        errorHandle(res, "ERROR_UPDATE_ITEM", error);
    }
};

const postItem = async ({body} : Request, res : Response) => {
    try {
        const response = await createCar(body);
        res.send(response);
    } catch (error) {
        errorHandle(res, "ERROR_POST_ITEM", error);
    }
    };

const deleteItem = async (req : Request, res : Response) => {
    try {
        const { id } = req.params;
        const response = await deleteCar(id as string);
        res.send(response);
    } catch (error) {
        errorHandle(res, "ERROR_DELETE_ITEM", error);
    }
};

export { getItems, getItem, updateItem, postItem, deleteItem };    