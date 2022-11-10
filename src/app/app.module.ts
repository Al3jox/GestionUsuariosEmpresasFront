import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';
import { CrearUsuariosComponent } from './componentes/crear-usuarios/crear-usuarios.component';
import { ActualizarUsuariosComponent } from './componentes/actualizar-usuarios/actualizar-usuarios.component';
import { CrearEmpresaComponent } from './componentes/crear-empresa/crear-empresa.component';
import { ListarEmpresaComponent } from './componentes/listar-empresa/listar-empresa.component';
import { ActualizarEmpresaComponent } from './componentes/actualizar-empresa/actualizar-empresa.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraLateralComponent,
    FooterComponent,
    LoginComponent,
    ListarUsuariosComponent,
    CrearUsuariosComponent,
    ActualizarUsuariosComponent,
    CrearEmpresaComponent,
    ListarEmpresaComponent,
    ActualizarEmpresaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
