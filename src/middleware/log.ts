import { type Request, type Response, type NextFunction } from "express";

const logMiddleware = (req : Request, res : Response, next : NextFunction) => {
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log(`User-Agent: ${userAgent}`);
    console.log(`Method: ${req.method}`);
    console.log(`Path: ${req.path}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);
    next();
};

export default logMiddleware;
