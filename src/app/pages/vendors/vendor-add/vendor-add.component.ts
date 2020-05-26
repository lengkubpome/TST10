import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-vendor-detail',
	templateUrl: './vendor-add.component.html',
	styleUrls: [ './vendor-add.component.scss' ]
})
export class VendorAddComponent implements OnInit {
	vendorForm: FormGroup;
	showLoading = false;


	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		// this.showLoading = true;
		this.vendorForm = this.fb.group({});
	}

	/**
   * After a form is initialized, we link it to our main form
   */
	formInitialized(name: string, form: FormGroup) {
		setTimeout(() => {
			this.vendorForm.setControl(name, form);
		}, 1000);
	}
}
