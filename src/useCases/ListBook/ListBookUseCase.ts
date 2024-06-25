import { Book } from "../../model/Book";
import { IBooksRepository } from "../../repository/IBooksRepository";

class ListBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  execute(): Book[] {
    return this.booksRepository.list();
  }
}

export { ListBookUseCase };
