import Elysia from "elysia";
import FetchUserById from "../core/user/service/FetchUserById";

export default class FetchUserByIdController {
    constructor(
        readonly server: Elysia,
        readonly fetchUserById: FetchUserById
    ) {
        server.get("/users/:id", async ({ params }) => {
            return await fetchUserById.execute(+params.id)
            
        })
    }
}