import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import {DomSanitizer} from '@angular/platform-browser';

declare var cordova: any;
@Component({
	selector: 'page-camera',
	templateUrl: 'camera.html'
})
export class CameraPage {
	//base64Image: string;
	cameraData: string;
	photoTaken: boolean;
	cameraUrl: string;
	photoSelected: boolean;

	constructor(private navCtrl: NavController, private sanitizer: DomSanitizer) {
		this.photoTaken = false;
	}

	selectFromGallery() {
		var options = {
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			destinationType: Camera.DestinationType.FILE_URI
		};
		Camera.getPicture(options).then((imageData) => {
			this.cameraUrl = imageData;
			this.photoSelected = true;
			this.photoTaken = false;
		}, (err) => {
			// Handle error
		});
	}


	openCamera() {
		var options = {
			sourceType: Camera.PictureSourceType.CAMERA,
			destinationType: Camera.DestinationType.DATA_URL
		};
		Camera.getPicture(options).then((imageData) => {
			this.cameraData = 'data:image/jpeg;base64,' + imageData;
			this.photoTaken = true;
			this.photoSelected = false;
		}, (err) => {
			// Handle error
			console.log(err);

		});
	}
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
}
