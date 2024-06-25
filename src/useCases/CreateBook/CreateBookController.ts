import { Request, Response } from "express";
import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createBookUseCase.execute({ name, description });

    return res.sendStatus(201);
  }
}

export { CreateBookController };
