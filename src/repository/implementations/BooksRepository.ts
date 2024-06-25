import { Book } from "../../model/Book";
import { IBooksRepository, IBooksRepositoryDTO } from "../IBooksRepository";

class BooksRepository implements IBooksRepository {
  private books: Book[];

  private static INSTANCE: BooksRepository;

  constructor() {
    this.books = [];
  }

  public static getInstance() {
    if (!BooksRepository.INSTANCE) {
      BooksRepository.INSTANCE = new BooksRepository();
    }

    return BooksRepository.INSTANCE;
  }

  create({ name, description }: IBooksRepositoryDTO) {
    const book = new Book();

    Object.assign(book, {
      name,
      description,
    });

    this.books.push(book);
  }

  list() {
    return this.books;
  }
}

export { BooksRepository };
