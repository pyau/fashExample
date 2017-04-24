import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FashService } from '../../app/services/fash.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  registerCredentials = { username: '', password: '' };

	  constructor(public navCtrl: NavController,  private fashService: FashService) {

	  }
	login() {
		this.fashService.login(this.registerCredentials.username, this.registerCredentials.password).subscribe(response => {
			console.log(response);
			localStorage.setItem('jwt', response.id_token);
			this.navCtrl.parent.select(1);
			//this.getPhotos();
		})
	}

}
