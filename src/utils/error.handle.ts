import { type Response } from "express";

const errorHandle = (res : Response, errorMessage : string, errorRaw? : any) => {
    console.log(errorRaw);
    res.status(500).json({message: errorMessage});
};

export { errorHandle };