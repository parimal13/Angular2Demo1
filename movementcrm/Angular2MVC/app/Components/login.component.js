"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("../Service/login.service");
var forms_1 = require("@angular/forms");
var global_1 = require("../Shared/global");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(fb, _loginService, router) {
        this.fb = fb;
        this._loginService = _loginService;
        this.router = router;
        this.indLoading = false;
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFrm = this.fb.group({
            UserName: ['', forms_1.Validators.required],
            Password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this._loginService.post(global_1.Global.BASE_TOKEN_ENDPOINT, formData._value).subscribe(function (data) {
            if (data != null && data.access_token != undefined) {
                localStorage.setItem("currentuser", JSON.stringify(data));
                //this.router.navigate(['/user']);
                window.location.href = "/user";
            }
            else {
                _this.msg = "There is some problem in login";
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    LoginComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.loginFrm.enable() : this.loginFrm.disable();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/login.component.html',
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map