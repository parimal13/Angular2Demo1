import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../Service/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../Model/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';

@Component({
    templateUrl: 'app/Components/register.component.html',
    providers: [RegisterService]
})

export class RegisterComponent implements OnInit {

    users: IUser[];
    user: IUser;
    msg: string;
    indLoading: boolean = false;
    regiterFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _registerService: RegisterService) { }

    ngOnInit(): void {
        this.regiterFrm = this.fb.group({
            Email: ['', Validators.required],
            Password: ['', Validators.required],
            ConfirmPassword: ['', Validators.required]
        });
    }


    onSubmit(formData: any) {
        this._registerService.post(Global.BASE_REGISTER_ENDPOINT, formData._value).subscribe(
            data => {
                if (data.ok) //Success
                {
                    this.regiterFrm = this.fb.group({
                        Email: ['', Validators.required],
                        Password: ['', Validators.required],
                        ConfirmPassword: ['', Validators.required]
                    });
                    this.msg = "User registered successfully"
                }
                else {
                    this.msg = "There is some problem in register";
                }
            },
            error => {
                this.msg = error;
            }
        );
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.regiterFrm.enable() : this.regiterFrm.disable();
    }
}