import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyPasswordComponent } from './verify-password/verify-password.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routes: Routes = [
     {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path:'signup', component: SignupComponent},
    {path:'logout', component: LogoutComponent},
    {path: 'reset-password/:token', component: ResetPasswordComponent},
    {path: 'verify', component: VerifyPasswordComponent},
    {path: 'home', component: HomeComponent},
    {path: 'forgot', component: ForgotPasswordComponent},
];
