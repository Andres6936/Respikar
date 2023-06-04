import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entity/user.entity";
import { GenericResponse } from "../types/generic.response";

describe("UserController", () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: "sqlite",
          database: ":memory:",
          dropSchema: true,
          entities: [User],
          synchronize: true,
          logging: false,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe("root", () => {
    it("should create the user in database", async () => {
        const response: GenericResponse<string> = await userController.create({
          firstName: "Joan",
        });

      expect(response).toHaveProperty("isBase64Encoded", false);
      expect(response).toHaveProperty("statusCode", 200);
    });
  });
});
