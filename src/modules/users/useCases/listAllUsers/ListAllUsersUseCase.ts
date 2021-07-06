import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user) {
      if (user.admin) {
        const users = this.usersRepository.list();

        return users;
      }
      else {
        throw new Error("Is not an Admin");
      }
    }
    else {
      throw new Error("User not found");
    }
  }
}

export { ListAllUsersUseCase };
