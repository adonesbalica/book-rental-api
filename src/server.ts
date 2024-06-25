import express from "express";

import { booksRoutes } from "./routes/book.routes";

const app = express();

app.use(express.json());

app.use(booksRoutes);

app.listen(3333, () => {
  console.log("Server is running!");
});
