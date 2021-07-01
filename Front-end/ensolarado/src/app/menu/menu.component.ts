import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nomeCompleto
  foto = environment.fotoPerfil
  

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nomeCompleto = ''
    environment.fotoPerfil = ''
    environment.id = 0
  }
}
