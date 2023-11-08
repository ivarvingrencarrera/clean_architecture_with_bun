export default interface UserUseCase<I, O> {
    

    execute(input: I): Promise<O>
}