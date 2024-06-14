import { Routes } from '@angular/router';
import {SignupComponent} from './singup/singup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
