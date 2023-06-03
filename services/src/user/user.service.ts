import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  public async save(user: User): Promise<User> {
      return await this.userRepository.save(user);
  }

  public async  delete(id): Promise<void> {
      await this.userRepository.delete(id);
  }

  public findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  public getAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
