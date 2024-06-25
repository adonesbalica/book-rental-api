interface IBooksRepositoryDTO {
  name: string;
  description: string;
}

interface IBooksRepository {
  create({ name, description }: IBooksRepositoryDTO): void;
}

export { IBooksRepository, IBooksRepositoryDTO };
