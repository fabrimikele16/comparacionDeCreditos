import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"registro",component:RegistroComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
