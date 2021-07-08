
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nomeCompleto
  foto = environment.fotoPerfil
  
  user: User = new User()
  idUser= environment.id

  tema: Tema = new Tema()
  listaTemas: Tema[]

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  idTema: number


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.temaService.refreshToken()
    this.findAllPostagens()
    this.findAllTemas()
  }

  sair() {
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nomeCompleto = ''
    environment.fotoPerfil = ''
    environment.id = 0
  }

  sobre(){
    this.router.navigate(['/sobre'])
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  cadastrar() {
    this.postagemService.postPostagens(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem criada com sucesso!')
      this.findAllPostagens()
      this.postagem = new Postagem()
    })
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  publicar(){
    this.tema.id= this.idTema
    this.postagem.tema= this.tema

    this.user.id= this.idUser
    this.postagem.usuario=this.user

    this.postagemService.postPostagens(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem= resp
      alert('Postagem realizada com sucesso!')
      this.postagem= new Postagem()
      this.findAllPostagens()
    })
  }
}
