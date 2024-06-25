import { Router } from "express";
import { createBookController } from "../useCases/CreateBook";
import { listBookController } from "../useCases/ListBook";

const booksRoutes = Router();

booksRoutes.post("/", (req, res) => {
  return createBookController.handle(req, res);
});

booksRoutes.get("/", (req, res) => {
  return listBookController.handle(req, res);
});

export { booksRoutes };
