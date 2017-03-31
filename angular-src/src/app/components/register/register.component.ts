import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	providers: [ValidateService]
})
export class RegisterComponent implements OnInit {
	name: String;
	username: String;
	email: String;
	password: String;

	constructor(
		private validateService: ValidateService,
		private flashMessage:FlashMessagesService) { }

	//private validateService: ValidateService

	ngOnInit() {
	}

	onRegisterSubmit(){
		const user = {
			name: this.name,
			email: this.email,
			username: this.username,
			password: this.password
		}

		// Required Fields
		if(!this.validateService.validateRegister(user)){
			this.flashMessage.show('Remplissez touts les champs SVP', {cssClass: 'alert-danger', timeout: 3000});
			return false;
		}

		// Validate Email
		if(!this.validateService.validateEmail(user.email)){
			this.flashMessage.show('Utilisez email valide SVP', {cssClass: 'alert-danger', timeout: 3000});
			return false;
		}
	}
}
