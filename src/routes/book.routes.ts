import { Router } from "express";

const booksRoutes = Router();

booksRoutes.get("/", (req, res) => {
  res.send("oi");
});

export { booksRoutes };
