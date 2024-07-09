import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { ListarclientesComponent } from './componentes/listarclientes/listarclientes.component';
import { CrearclientesComponent } from './componentes/crearclientes/crearclientes.component';

const routes: Routes = [

  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio',component:CrearclientesComponent}, //
  {path:'listarclientes',component:ListarclientesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
