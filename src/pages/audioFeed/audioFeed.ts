import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FashService } from '../../app/services/fash.service';

@Component({
  selector: 'page-audioFeed',
  templateUrl: 'audioFeed.html'
})

export class AudioFeedPage {
	items : any;
	constructor(public navCtrl: NavController, private fashService: FashService) {

	}

	ngOnInit() {
		console.log('ngOnInit');
	}

	getMusic() {
		this.fashService.getMusics().subscribe(response => {
			console.log(response);
			this.items = response;
		})
	}

	ionViewWillEnter() { // THERE IT IS!!!
		console.log('ionViewWillEnter!');
		this.getMusic();
    }

    playMusic(music:string) {
    	var audio = new Audio('data:audio/mp3;base64,'+music);
		audio.play();
    }

	onTrackFinished(track: any) {
		console.log('Track finished', track)
	} 
}
