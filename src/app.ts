import "dotenv/config";
import express from "express";
import { router } from "./routes/index.js";
import cors from "cors";
import db from "./config/mongo.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
// recibir datos en formato json
app.use(express.json());
app.use(router);
db().then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});