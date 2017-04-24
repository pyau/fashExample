import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FashService } from '../../app/services/fash.service';
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})

export class FeedPage {
	items : any;
	constructor(public navCtrl: NavController, private fashService: FashService) {

	}

	ngOnInit() {
//		this.login();
this.getPhotos();
	}
/*
	login() {
		this.fashService.login('admin', 'admin').subscribe(response => {
			//console.log(response);
			localStorage.setItem('jwt', response.id_token);
			this.getPhotos();
		})
	}
*/
	getPhotos() {
		this.fashService.getPhotos().subscribe(response => {
			//console.log(response);
			this.items = response;
		})
	}

ionViewWillEnter() { // THERE IT IS!!!
this.getPhotos();
    }

}
