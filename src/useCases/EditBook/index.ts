import { EditBookController } from "./EditBookController";
import { EditBookUseCase } from "./EditBookUseCase";
import { BooksRepository } from "../../repository/implementations/BooksRepository";

const booksRepository = BooksRepository.getInstance();

const editBookUseCase = new EditBookUseCase(booksRepository);

const editBookController = new EditBookController(editBookUseCase);

export { editBookController };
