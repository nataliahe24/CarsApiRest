import multer from "multer";
import { existsSync, mkdirSync } from "fs";
import { join } from "path";

const uploadsDir = join(process.cwd(), "uploads");

if (!existsSync(uploadsDir)) {
  mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, uploadsDir);
  },
  filename(_req, file, cb) {
    const timestamp = Date.now();
    const cleaned = file.originalname
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9_.-]/g, "");
    cb(null, `${timestamp}-${cleaned}`);
  },
});

const limits = {
  fileSize: 10 * 1024 * 1024,
};

export const muiterMiddleware = multer({ storage, limits });

export default muiterMiddleware;
