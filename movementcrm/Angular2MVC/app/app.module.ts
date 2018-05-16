import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { UserService } from './Service/user.service';
import { LoginComponent } from './components/login.component';
import { LoginService } from './Service/login.service';
import { RegisterComponent } from './components/register.component';

//LoginService

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, UserComponent, HomeComponent, LoginComponent, RegisterComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService, LoginService],
    bootstrap: [AppComponent]

})
export class AppModule { }
