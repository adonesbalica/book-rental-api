import { Request, Response } from "express";
import { EditBookUseCase } from "./EditBookUseCase";

class EditBookController {
  constructor(private editBookUseCase: EditBookUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    const { book } = req.query;

    this.editBookUseCase.execute({ name, description, book });

    return res.sendStatus(201);
  }
}

export { EditBookController };
