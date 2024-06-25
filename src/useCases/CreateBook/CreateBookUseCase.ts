import { IBooksRepository } from "../../repository/IBooksRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  execute({ name, description }: IRequest): void {
    this.booksRepository.create({ name, description });
  }
}

export { CreateBookUseCase };
