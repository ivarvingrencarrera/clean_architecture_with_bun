import UserUseCase from "../../shared/UserUseCase";
import UserRepository from "./UserRepository";

type Input = {
    name: string
    email: string
    password: string
}

export default class CreateUser implements UserUseCase<Input, void> {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(input: Input): Promise<void> {
        const { name, email, password } = input
        const existingUser = await this.userRepository.findByEmail(email)
        if (existingUser) {
            throw new Error("User already exists")
        }
        await this.userRepository.create({ name, email, password })
    }
}