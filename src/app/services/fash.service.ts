import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FashService {
	http : any;
	baseUrl : string;

	constructor(http : Http) {
		this.http = http;
		this.baseUrl = 'https://datafarm.herokuapp.com/api/';
	}

	login(username, password) {
		// works on phone but not in browser
 		let body = {'password': password, 'rememberMe': true, 'username': username};
        let bodyString = JSON.stringify(body); // Stringify payload
        let header = new Headers({ 'Content-Type': 'application/json', 'Accept':'application/json'});//, 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTQ5NTUxMTkxOX0.5ex-JJd1afpXnxJNHpe33VfuL2PhGHBY5zQLvpr7GxfgAm8j4VB7wRUWmKTI295kjCLQ6m2alY6fK0wicLcmhA' });
        let options = new RequestOptions({ headers: header });
 		let url = this.baseUrl + 'authenticate';
		return this.http.post(url, bodyString, options)
			.map(res => res.json());
//		return this.http.get(this.baseUrl+'/sports/top.json?limit=5')
//			.map(res => res.json());
	}

	getJwtHeader() {
		var jwt = localStorage.getItem('jwt');
		//console.log(jwt.toString());
		return 'Bearer ' + jwt;
	}

	getPhotos() {
        let header = new Headers({'Accept':'application/json', 'Authorization': this.getJwtHeader() });
        let options = new RequestOptions({ headers: header }); // Create a request option
		let url = this.baseUrl + 'photos';
		return this.http.get(url, options).map(res => res.json());
	}

	getMusics() {
		/*
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTQ5MzE4NTE4Mn0.53W1lTyJK-Ytl9WkWHhquVLydBkUc_H_JGeTP5POxojjubbmz3ghtCNBGtTwb91TOiZCruMd6ugSojkQfEi2og' 'https://datafarm.herokuapp.com/api/music'
		*/
        let header = new Headers({'Accept':'application/json, text/plain, */*', 'Authorization': this.getJwtHeader() });
        let options = new RequestOptions({ headers: header }); // Create a request option
		let url = this.baseUrl + 'music';
		return this.http.get(url, options).map(res => res.json());
	}

	putPhoto(photo: String) {

 		let body = {'photo': photo, 'photoContentType':"image/jpeg"};
        let bodyString = JSON.stringify(body); // Stringify payload
		//console.log(body);

        let header = new Headers({
        	'Content-Type': 'application/json',
        	'Accept':'application/json, txt/plain, */*',
    		'Authorization': this.getJwtHeader()
    	});
        let options = new RequestOptions({ headers: header }); // Create a request option
		let url = this.baseUrl + 'photos';

		return this.http.post(url, body, options)
			.map(res => res.json());

	}
}