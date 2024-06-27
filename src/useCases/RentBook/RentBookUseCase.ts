import { IBooksRepository } from "../../repository/IBooksRepository";

interface IRequest {
  name: string;
  duration: string;
}

class RentBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  execute({ name, duration }: IRequest): void {
    const bookDontExists = this.booksRepository.findByName(name);

    if (!bookDontExists) {
      throw new Error("Book Dosent Exists");
    }

    if (bookDontExists.isRent) {
      throw new Error("Books Already Rent");
    }

    this.booksRepository.rent({ name, duration });
  }
}

export { RentBookUseCase };

