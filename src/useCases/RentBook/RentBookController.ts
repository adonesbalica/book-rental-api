import { Request, Response } from "express";
import { RentBookUseCase } from "./RentBookUseCase";

class RentBookController {
  constructor(private rentBookUseCase: RentBookUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, duration } = req.body;

    this.rentBookUseCase.execute({ name, duration });

    return res.sendStatus(201);
  }
}

export { RentBookController };

