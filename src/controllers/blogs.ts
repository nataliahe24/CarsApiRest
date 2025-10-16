import { type Response, type Request } from "express";
import { errorHandle } from "../utils/error.handle.js";

const getBlogs = (res : Response) => {
    try {
    } catch (error) {
        errorHandle(res, "ERROR_GET_BLOG");
    }
};

const getBlog = (req : Request, res : Response) => {
    try {
    } catch (error) {
        errorHandle(res, "ERROR_GET_BLOG");
    }
};

const updateBlog = (req : Request, res : Response) => {
    try {
    } catch (error) {
        errorHandle(res, "ERROR_UPDATE_BLOG");
    }
};

const postBlog = ({body} : Request, res : Response) => {
    try {
        res.send(body);
    } catch (error) {
        errorHandle(res, "ERROR_POST_BLOG");
    }
    };

const deleteBlog = (req : Request, res : Response) => {
    try {
    } catch (error) {
        errorHandle(res, "ERROR_DELETE_BLOG");
    }
};

export { getBlogs, getBlog, updateBlog, postBlog, deleteBlog };    