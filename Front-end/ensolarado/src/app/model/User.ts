import { Postagem } from "./Postagem"

export class User {
    public id: number
    public nomeCompleto: string
    public usuario: string
    public senha: string
    public fotoPerfil: string
    public tipo: string
    public numTelefone: string
    public email: string
    public dataNascimento: Date
    public endereco: string
    public genero: string
    public postagem: Postagem[]
}