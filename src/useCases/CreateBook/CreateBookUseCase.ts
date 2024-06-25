import { IBooksRepository } from "../../repository/IBooksRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  execute({ name, description }: IRequest): void {
    const bookAlreadyExists = this.booksRepository.findByName(name);

    if (bookAlreadyExists) {
      throw new Error("Book With The Same Title Already Exists");
    }

    this.booksRepository.create({ name, description });
  }
}

export { CreateBookUseCase };
