import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
const routes: Routes = 
[
  { path :'login', component:LoginComponent, data: {text: 'Login' }},
  { path :'homepage', component:HomepageComponent , data: {text: 'Homepage' }},
  { path :'unauthorized', component:UnAuthorizedComponent , data: {text: 'UnAuthorized' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
