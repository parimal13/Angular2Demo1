import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../Model/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
    templateUrl: 'app/Components/user.component.html'
})

export class UserComponent implements OnInit {

    @ViewChild('modal') modal: ModalComponent;
    users: IUser[];
    user: IUser;
    msg: string;
    indLoading: boolean = false;
    userFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;
    CurrentUser: string;
    constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) { }

    ngOnInit(): void {
        var userJson = localStorage.getItem("currentuser");
        if (userJson == null) {
            this.router.navigate(['/home']);    
            return;
        }
        
        var user = JSON.parse(localStorage.getItem("currentuser"));
        this.CurrentUser = user.userName;
        this.LoadUsers();
    }

    LoadUsers(): void {
        this.indLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(users => { this.users = users; this.indLoading = false; },
            error => this.msg = <any>error);
    }

    SetControlsState(isEnable: boolean)
    {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    }
}