import { IBooksRepository } from "../../repository/IBooksRepository";

class EditBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  execute({ name, description, book }) {
    const bookAlreadyExists = this.booksRepository.findByName(book);

    if (!bookAlreadyExists) {
      throw new Error("Book Not Exists");
    }

    if (name === "") {
      throw new Error("The Book Name Cannot Be Empty");
    }

    if (description === "") {
      throw new Error("The Book Description Cannot Be Empty");
    }

    this.booksRepository.edit({ name, description, book });
  }
}

export { EditBookUseCase };
