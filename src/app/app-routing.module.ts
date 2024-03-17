import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Components/dashboard/resetpassword/resetpassword.component';
import { ReviewloginComponent } from './Components/reviewlogin/reviewlogin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgetpass',component:ForgetpasswordComponent},
  {path:'resetpass',component:ResetpasswordComponent},
  {path:'reviewlogin',component:ReviewloginComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
