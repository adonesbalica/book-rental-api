import { Request, Response } from "express";
import { ListBookUseCase } from "./ListBookUseCase";

class ListBookController {
  constructor(private listBookUseCase: ListBookUseCase) {}

  handle(req: Request, res: Response): Response {
    const books = this.listBookUseCase.execute();

    return res.json(books);
  }
}

export { ListBookController };
