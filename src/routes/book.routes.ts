import { Router } from "express";
import { createBookController } from "../useCases/CreateBook";
import { listBookController } from "../useCases/ListBook";
import { editBookController } from "../useCases/EditBook";
import { rentBookController } from "../useCases/RentBook";

const booksRoutes = Router();

booksRoutes.put("/", (req, res) => {
  return editBookController.handle(req, res);
});

booksRoutes.post("/", (req, res) => {
  return createBookController.handle(req, res);
});

booksRoutes.get("/", (req, res) => {
  return listBookController.handle(req, res);
});

booksRoutes.post("/rent", (req, res) => {
  return rentBookController.handle(req, res);
});

export { booksRoutes };

