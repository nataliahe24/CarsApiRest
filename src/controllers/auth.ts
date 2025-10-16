import { type Request, type Response } from "express";
import { registerNewUser, loginUser } from "../services/authService.js";
import { errorHandle } from "../utils/error.handle.js";

const register = async ({body} : Request, res : Response) => {
    try {
        const response = await registerNewUser(body);
        res.send({message: "User created successfully"});
    } catch (error) {
        errorHandle(res, "ERROR_REGISTER", error);
    }
}
 const login = async ({body} : Request, res : Response) => {
    try {
        const response = await loginUser({email: body.email, password: body.password});
        if (response === "Invalid password") {
            res.status(403).send(response);
        }
        else if (response === "User not found") {
            res.status(404).send(response);
        }
        else {
            res.send(response);
        }
    } catch (error) {
        errorHandle(res, "ERROR_LOGIN", error);
    }
}

 export { register, login };