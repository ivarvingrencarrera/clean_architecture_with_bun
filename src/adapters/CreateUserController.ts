import Elysia from "elysia";
import CreateUser from "../core/user/service/CreateUser";

export default class CreateUserController {
    constructor(
        readonly server: Elysia,
        readonly createUser: CreateUser
    ) {
        server.post("/users", async ({ body }) => {
            const { name, email, password } = body as any
            await createUser.execute({ name, email, password })
            return {
                status: 201,
                body: {
                    message: "User created successfully"
                }
            }
        })
    }
}