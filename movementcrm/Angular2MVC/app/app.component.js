"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.IsLoggedIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
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
    };
    AppComponent.prototype.Logout = function () {
        localStorage.removeItem("currentuser");
        window.location.href = "/home";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "user-app",
        template: "\n                <div>\n                    <nav class='navbar navbar-inverse'>\n                        <div class='container-fluid'>\n{{IsLoggedIn}}\n                            <ul class='nav navbar-nav'>\n                                <li><a [routerLink]=\"['home']\">Home</a></li>\n                                <li><a [routerLink]=\"['login']\" *ngIf=\"!IsLoggedIn\">Login</a></li>\n                                <li><a [routerLink]=\"['user']\" *ngIf=\"IsLoggedIn\">Users Management</a></li>\n                                <li><a [routerLink]=\"['register']\" *ngIf=\"!IsLoggedIn\">Register</a></li>\n                                <li><a *ngIf=\"IsLoggedIn\" (click)=\"Logout()\">Logout</a></li>\n \n                            </ul>\n                            <div *ngIf=\"IsLoggedIn\" style='float:right;color:white;'><h4>Welcome {{CurrentUser}}</h4></div>\n                        </div>\n                    </nav>\n                    <div class='container'>\n                        <router-outlet></router-outlet>\n                    </div>\n                 </div>\n                "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map