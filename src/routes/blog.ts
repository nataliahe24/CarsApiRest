import { Router } from "express";
import { getBlogs, getBlog, updateBlog, postBlog, deleteBlog } from "../controllers/blogs.js";
const router = Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.put("/:id", updateBlog);
router.post("/", postBlog);
router.delete("/:id", deleteBlog);

export { router };