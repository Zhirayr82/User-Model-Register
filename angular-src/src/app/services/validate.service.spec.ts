// import { TestBed, inject } from '@angular/core/testing';

// import { ValidateService } from './validate.service';

// describe('ValidateService', () => {
	// 	beforeEach(() => {
		// 		TestBed.configureTestingModule({
			// 			providers: [ValidateService, GithubService]
			// 		});
			// 	});

			// 	it('should ...', inject([ValidateService], (service: ValidateService) => {
				// 		expect(service).toBeTruthy();
				// 	}));
				// });


				/* tslint:disable:no-unused-variable */

				import { TestBed, async, inject } from '@angular/core/testing';
				import { ValidateService } from './validate.service';

				describe('ValidateService', () => {
					beforeEach(() => {
						TestBed.configureTestingModule({
							providers: [ValidateService]
						});
					});

					it('should ...', inject([ValidateService], (service: ValidateService) => {
						expect(service).toBeTruthy();
					}));
				});

				export class AppComponent {}
