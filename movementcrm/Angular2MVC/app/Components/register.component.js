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
var register_service_1 = require("../Service/register.service");
var forms_1 = require("@angular/forms");
var global_1 = require("../Shared/global");
var RegisterComponent = (function () {
    function RegisterComponent(fb, _registerService) {
        this.fb = fb;
        this._registerService = _registerService;
        this.indLoading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.regiterFrm = this.fb.group({
            Email: ['', forms_1.Validators.required],
            Password: ['', forms_1.Validators.required],
            ConfirmPassword: ['', forms_1.Validators.required]
        });
    };
    RegisterComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this._registerService.post(global_1.Global.BASE_REGISTER_ENDPOINT, formData._value).subscribe(function (data) {
            if (data.ok) {
                _this.regiterFrm = _this.fb.group({
                    Email: ['', forms_1.Validators.required],
                    Password: ['', forms_1.Validators.required],
                    ConfirmPassword: ['', forms_1.Validators.required]
                });
                _this.msg = "User registered successfully";
            }
            else {
                _this.msg = "There is some problem in register";
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    RegisterComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.regiterFrm.enable() : this.regiterFrm.disable();
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/register.component.html',
        providers: [register_service_1.RegisterService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, register_service_1.RegisterService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map