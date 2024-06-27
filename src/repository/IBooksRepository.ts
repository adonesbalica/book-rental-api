import { Book } from "../model/Book";

interface IBooksRepositoryDTO {
  name: string;
  description?: string;
  book?: string;
  duration?: string;
}

interface IBooksRepository {
  create({ name, description }: IBooksRepositoryDTO): void;
  list(): Book[];
  findByName(name: string): Book;
  edit({ name, description, book }: IBooksRepositoryDTO): void;
  rent({ name, duration }: IBooksRepositoryDTO): void;
}

export { IBooksRepository, IBooksRepositoryDTO };

