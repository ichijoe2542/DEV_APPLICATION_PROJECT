import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PosComponent} from './pos/pos.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home', component : HomeComponent},
  {path:'pos', component : PosComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
