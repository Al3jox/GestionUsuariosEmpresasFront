import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { CrearUsuariosComponent } from './componentes/crear-usuarios/crear-usuarios.component';
import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';
import { ActualizarUsuariosComponent } from './componentes/actualizar-usuarios/actualizar-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';

import { CrearEmpresaComponent } from './componentes/crear-empresa/crear-empresa.component';
import { ActualizarEmpresaComponent } from './componentes/actualizar-empresa/actualizar-empresa.component';
import { ListarEmpresaComponent } from './componentes/listar-empresa/listar-empresa.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'crearUsuario', component: CrearUsuariosComponent},
  {path: 'listarUsuario', component: ListarUsuariosComponent},
  {path: 'actualizarUsuarios', component: ActualizarUsuariosComponent},
  {path: 'crearEmpresa', component: CrearEmpresaComponent},
  {path: 'actualizarEmpresa', component: ActualizarEmpresaComponent},
  {path: 'listarEmpresas', component: ListarEmpresaComponent},
  {path: 'contacto', component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
