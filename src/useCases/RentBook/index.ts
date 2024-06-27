import { BooksRepository } from "../../repository/implementations/BooksRepository";
import { RentBookUseCase } from "./RentBookUseCase";
import { RentBookController } from "./RentBookController";

const booksRepository = BooksRepository.getInstance();
const rentBookUseCase = new RentBookUseCase(booksRepository);
const rentBookController = new RentBookController(rentBookUseCase);

export { rentBookController };

