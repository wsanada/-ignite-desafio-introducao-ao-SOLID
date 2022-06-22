import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const item = this.usersRepository.findById(user_id)

    if (!item)
      throw new Error("O usuário não pôde ser encontrado")

    return item
  }
}

export { ShowUserProfileUseCase };
