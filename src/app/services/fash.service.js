var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
var FashService = (function () {
    function FashService(http) {
        this.http = http;
        this.baseUrl = 'https://datafarm.herokuapp.com/api/';
    }
    FashService.prototype.login = function (username, password) {
        // works on phone but not in browser
        var body = { 'password': password, 'rememberMe': true, 'username': username };
        var bodyString = JSON.stringify(body); // Stringify payload
        var header = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' }); //, 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTQ5NTUxMTkxOX0.5ex-JJd1afpXnxJNHpe33VfuL2PhGHBY5zQLvpr7GxfgAm8j4VB7wRUWmKTI295kjCLQ6m2alY6fK0wicLcmhA' });
        var options = new RequestOptions({ headers: header });
        var url = this.baseUrl + 'authenticate';
        return this.http.post(url, bodyString, options)
            .map(function (res) { return res.json(); });
        //		return this.http.get(this.baseUrl+'/sports/top.json?limit=5')
        //			.map(res => res.json());
    };
    FashService.prototype.getJwtHeader = function () {
        var jwt = localStorage.getItem('jwt');
        //console.log(jwt.toString());
        return 'Bearer ' + jwt;
    };
    FashService.prototype.getPhotos = function () {
        var header = new Headers({ 'Accept': 'application/json', 'Authorization': this.getJwtHeader() });
        var options = new RequestOptions({ headers: header }); // Create a request option
        var url = this.baseUrl + 'photos';
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    FashService.prototype.putPhoto = function (photo) {
        console.log(photo);
        var body = { 'image': [photo], };
        var bodyString = JSON.stringify(body); // Stringify payload
        var header = new Headers({ 'Content-Type': 'application/json',
            'Accept': 'application/json, txt/plain, */*',
            'Authorization': this.getJwtHeader() });
        var options = new RequestOptions({ headers: header }); // Create a request option
        var url = this.baseUrl + 'photos';
        return this.http.post(url, bodyString, options)
            .map(function (res) { return res.json(); });
    };
    return FashService;
}());
FashService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], FashService);
export { FashService };
//# sourceMappingURL=fash.service.js.map