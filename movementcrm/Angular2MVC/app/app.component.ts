import { Component } from "@angular/core"

@Component({
    selector: "user-app",
    template: `
                <div>
                    <nav class='navbar navbar-inverse'>
                        <div class='container-fluid'>
{{IsLoggedIn}}
                            <ul class='nav navbar-nav'>
                                <li><a [routerLink]="['home']">Home</a></li>
                                <li><a [routerLink]="['login']" *ngIf="!IsLoggedIn">Login</a></li>
                                <li><a [routerLink]="['user']" *ngIf="IsLoggedIn">Users Management</a></li>
                                <li><a [routerLink]="['register']" *ngIf="!IsLoggedIn">Register</a></li>
                                <li><a *ngIf="IsLoggedIn" (click)="Logout()">Logout</a></li>
 
                            </ul>
                            <div *ngIf="IsLoggedIn" style='float:right;color:white;'><h4>Welcome {{CurrentUser}}</h4></div>
                        </div>
                    </nav>
                    <div class='container'>
                        <router-outlet></router-outlet>
                    </div>
                 </div>
                `
})

export class AppComponent {
    IsLoggedIn: boolean = false;
    CurrentUser: string;
    ngOnInit(): void {
        this.IsLoggedIn = false;
        var userJson = localStorage.getItem("currentuser");
        if (userJson == null) {
            this.IsLoggedIn = false;
            return;
        }
        var user = JSON.parse(userJson);
        if (user.access_token) {
            this.IsLoggedIn = true;
            this.CurrentUser = user.userName;
        }
    }
    Logout(): void {
        localStorage.removeItem("currentuser");
        window.location.href = "/home";
    }
}
