import { Book } from "../model/Book";

interface IBooksRepositoryDTO {
  name: string;
  description: string;
}

interface IBooksRepository {
  create({ name, description }: IBooksRepositoryDTO): void;
  list(): Book[];
}

export { IBooksRepository, IBooksRepositoryDTO };
