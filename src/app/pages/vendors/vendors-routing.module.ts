import { VendorListComponent } from './vendor-list/vendor-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendorsComponent } from './vendors.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';

const vendorsRoutes: Routes = [
	{
		path: '',
		component: VendorsComponent,
		children: [
      { path: '', component: VendorListComponent },
      { path: 'add', component: VendorAddComponent }
		]
	},

];

@NgModule({
	imports: [ RouterModule.forChild(vendorsRoutes) ],
	exports: [ RouterModule ]
})
export class VendorsRoutingRoutes {}
