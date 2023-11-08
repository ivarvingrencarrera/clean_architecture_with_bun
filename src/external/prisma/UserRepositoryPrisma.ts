import { PrismaClient } from "@prisma/client";
import User from "../../core/user/model/User";
import UserRepository from "../../core/user/service/UserRepository";

export default class UserRepositoryPrisma implements UserRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient();
    }
    async create(user: User): Promise<User> {
        return this.prisma.user.create({ data:  user })
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email: email }})
    }

    async findById(user_id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id: user_id }})
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany()
    }
}