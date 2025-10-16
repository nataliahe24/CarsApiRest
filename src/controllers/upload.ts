import { type Request, type Response } from "express";
import { errorHandle } from "../utils/error.handle.js";
import { muiterMiddleware } from "../middleware/file.js";
import { registerUpload } from "../services/storageService.js";
import { type RequestExt } from "../interfaces/requestExt.js";
import { type StorageInterface } from "../interfaces/storageInterface.js";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: StorageInterface = {
      fileName: `${file?.filename}`,
      path: `${file?.path}`,
      userId: `${user?.id}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send({ message: "File uploaded successfully", response });
  } catch (error) {
    errorHandle(res, "ERROR_GET_FILE", error);
  }
};

export { getFile };
