import express from "express";
import booksRoute from "./routes/books.routes.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8800;

dotenv.config();

app.get("/", (req, res) => {
  res.json("This is working");
});

app.get("/books", booksRoute);

app.listen(PORT, () => {
  console.log("Connected to server");
});
