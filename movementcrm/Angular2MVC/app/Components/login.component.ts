import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../Model/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';

import { Global } from '../Shared/global';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
    templateUrl: 'app/Components/login.component.html',
    providers: [LoginService]
})

export class LoginComponent implements OnInit {

    users: IUser[];
    user: IUser;
    msg: string;
    indLoading: boolean = false;
    loginFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;
    
    ;
    constructor(private fb: FormBuilder, private _loginService: LoginService, private router : Router) { }

    ngOnInit(): void {
        this.loginFrm = this.fb.group({
            UserName: ['', Validators.required],
            Password: ['', Validators.required]
        });
    }


    onSubmit(formData: any) {
        this._loginService.post(Global.BASE_TOKEN_ENDPOINT, formData._value).subscribe(
            data => {
                if (data != null && data.access_token != undefined) //Success
                {
                    localStorage.setItem("currentuser", JSON.stringify(data));
                    //this.router.navigate(['/user']);
                    window.location.href = "/user";
                }
                else {
                    this.msg = "There is some problem in login";
                }

            },
            error => {
                this.msg = error;
            }
        );

    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.loginFrm.enable() : this.loginFrm.disable();
    }
}