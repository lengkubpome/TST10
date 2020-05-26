import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-vendors',
	template: `
    <router-outlet></router-outlet>`,
	styleUrls: [ './vendors.component.scss' ]
})
export class VendorsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
