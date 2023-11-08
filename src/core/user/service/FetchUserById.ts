import UserUseCase from "../../shared/UserUseCase";
import User from "../model/User";
import UserRepository from "./UserRepository";

export default class FetchUserById implements UserUseCase<number, User | null> {
    constructor(readonly repository: UserRepository) {}

    async execute(user_id: number): Promise<User | null> {
        return await this.repository.findById(user_id);
    }
}