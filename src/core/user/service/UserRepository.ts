import User from "../model/User"

export default interface UserRepository {
    create(user: User): Promise<User>
    findByEmail(email: string): Promise<User | null>
    findById(user_id: number): Promise<User | null>
    findAll(): Promise<User[]>
}
