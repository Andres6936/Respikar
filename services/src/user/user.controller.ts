import { UserService } from "./user.service";
import { Body, Controller, Delete, Get, Put } from "@nestjs/common";
import { User, UserData } from "../entity/user.entity";
import { GenericResponse } from "../types/generic.response";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put()
  public async create(@Body() user: UserData): Promise<GenericResponse<string>> {
    const userCreated: User = await this.userService.save(user);
    return {
      isBase64Encoded: false,
      statusCode: 200,
      body: "Sucessfull to create register with id: " + userCreated.id,
    };
  }

  @Delete()
  public delete() {}

  @Get("/one")
  public getOne() {}

  @Get("/all")
  public getAll() {}
}