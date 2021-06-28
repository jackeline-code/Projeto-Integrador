import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
<<<<<<< HEAD
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';
=======
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

>>>>>>> 8dbcdb39e60351dd3c683448756299069ae74f60

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
<<<<<<< HEAD
    CadastrarComponent,
    SobreComponent
=======
    MenuComponent,
    RodapeComponent,
   
>>>>>>> 8dbcdb39e60351dd3c683448756299069ae74f60
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
