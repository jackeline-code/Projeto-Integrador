import { Postagem } from "./Postagem"

export class Tema {
    public id: number
    public descricao: string
    public quantidadePosts: number
    public nomeTema: string
    public postagem: Postagem[]
}