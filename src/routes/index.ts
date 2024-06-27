import { Router } from "express";

import { booksRoutes } from "./book.routes";

const router = Router();

router.use("/", booksRoutes);

export { router };

