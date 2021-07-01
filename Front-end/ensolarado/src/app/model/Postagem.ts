import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem {
    public id: number
    public titulo: string
    public dataPostagem: Date
    public midia: string
    public likes: number
    public usuario: User
    public postagem: string
    public tema: Tema
}