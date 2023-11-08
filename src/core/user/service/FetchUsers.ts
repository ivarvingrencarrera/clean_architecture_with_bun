import UserUseCase from "../../shared/UserUseCase";
import User from "../model/User";
import UserRepository from "./UserRepository";

export default class FetchUsers implements UserUseCase<void, User[]> {
    constructor(readonly repository: UserRepository) {}

    async execute(): Promise<User[]> {
        return await this.repository.findAll();
    }
}