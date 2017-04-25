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
import { Camera } from 'ionic-native';
import { DomSanitizer } from '@angular/platform-browser';
import { FashService } from '../../app/services/fash.service';
var CameraPage = (function () {
    function CameraPage(navCtrl, fashService, sanitizer) {
        this.navCtrl = navCtrl;
        this.fashService = fashService;
        this.sanitizer = sanitizer;
        this.photoTaken = false;
    }
    CameraPage.prototype.selectFromGallery = function () {
        var _this = this;
        var options = {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.DATA_URL
        };
        Camera.getPicture(options).then(function (imageData) {
            //this.cameraUrl = imageData;
            _this.cameraData = 'data:image/jpeg;base64,' + imageData;
            _this.photoSelected = true;
            _this.photoTaken = false;
        }, function (err) {
            // Handle error
        });
    };
    CameraPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.DATA_URL
        };
        Camera.getPicture(options).then(function (imageData) {
            _this.cameraData = 'data:image/jpeg;base64,' + imageData;
            _this.photoTaken = true;
            _this.photoSelected = false;
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    /*	takePicture(){
            Camera.getPicture({
                destinationType: Camera.DestinationType.DATA_URL,
                targetWidth: 1000,
                targetHeight: 1000
            }).then((imageData) => {
                // imageData is a base64 encoded string
                this.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
                console.log(err);
            });
        }
        */
    CameraPage.prototype.upload = function () {
        console.log('upload');
        if (this.photoSelected == true) {
            this.fashService.putPhoto(this.cameraData).subscribe(function (response) {
                console.log(response);
            });
        }
        else {
            this.fashService.putPhoto(this.cameraData).subscribe(function (response) {
                console.log(response);
            });
        }
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Component({
        selector: 'page-camera',
        templateUrl: 'camera.html'
    }),
    __metadata("design:paramtypes", [NavController, FashService, DomSanitizer])
], CameraPage);
export { CameraPage };
//# sourceMappingURL=camera.js.map