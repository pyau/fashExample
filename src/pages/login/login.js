var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FashService } from '../../app/services/fash.service';
var LoginPage = (function () {
    function LoginPage(navCtrl, fashService) {
        this.navCtrl = navCtrl;
        this.fashService = fashService;
        this.registerCredentials = { username: '', password: '' };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.fashService.login(this.registerCredentials.username, this.registerCredentials.password).subscribe(function (response) {
            console.log(response);
            localStorage.setItem('jwt', response.id_token);
            _this.navCtrl.parent.select(1);
            //this.getPhotos();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController, FashService])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map