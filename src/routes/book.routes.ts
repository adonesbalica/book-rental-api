import { Router } from "express";
import { createBookController } from "../useCases/CreateBook";

const booksRoutes = Router();

booksRoutes.post("/", (req, res) => {
  return createBookController.handle(req, res);
});

export { booksRoutes };
