import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCheckInComponent } from './create-check-in/create-check-in.component';
import { CreateLoginComponent } from './create-login/create-login.component';

const routes: Routes = [
  {path: 'add', component: CreateLoginComponent},
  {path: 'login', component: CreateCheckInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
