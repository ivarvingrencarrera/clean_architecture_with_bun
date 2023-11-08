import { Elysia } from "elysia";

import CreateUser from "./core/user/service/CreateUser";
import CreateUserController from "./adapters/CreateUserController";
import UserRepositoryPrisma from "./external/prisma/UserRepositoryPrisma";
import FetchUsers from "./core/user/service/FetchUsers";
import FetchUsersController from "./adapters/FetchUsersController";
import FetchUserById from "./core/user/service/FetchUserById";
import FetchUserByIdController from "./adapters/FetchUserByIdController";

const app = new Elysia()

const userRepository = new UserRepositoryPrisma()

const createUser = new CreateUser(userRepository)
new CreateUserController(app, createUser)

const fetchUsers = new FetchUsers(userRepository)
new FetchUsersController(app, fetchUsers)

const fetchUserById = new FetchUserById(userRepository)
new FetchUserByIdController(app, fetchUserById)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
