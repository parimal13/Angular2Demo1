import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);