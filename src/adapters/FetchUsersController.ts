import Elysia from "elysia";
import FetchUsers from "../core/user/service/FetchUsers";

export default class FetchUsersController {
    constructor(
        readonly server: Elysia,
        readonly fetchUsers: FetchUsers
    ) {
        server.get("/users", async () => {
            return await fetchUsers.execute()
            
        })
    }
}