import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'/userdetails',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'userdetails',component:UserDetailsComponent,canActivate:[authGuard]
  },
  {
    path:'registration',component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
