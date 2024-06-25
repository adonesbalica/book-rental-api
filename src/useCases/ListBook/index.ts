import { BooksRepository } from "../../repository/implementations/BooksRepository";
import { ListBookController } from "./ListBookController";
import { ListBookUseCase } from "./ListBookUseCase";

const bookRepository = BooksRepository.getInstance();

const listBookUseCase = new ListBookUseCase(bookRepository);

const listBookController = new ListBookController(listBookUseCase);

export { listBookController };
