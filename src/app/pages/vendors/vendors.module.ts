import { CarInput } from './vendor-add/car-list/car-input/car-input.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsRoutingRoutes } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadImageComponent } from 'src/app/public/components/upload-image/upload-image.component';
import { VendorAddCarListComponent } from './vendor-add/car-list/car-list.component';
import { VendorAddInfoComponent } from './vendor-add/info/vendor-info.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		VendorsRoutingRoutes,
		FlexLayoutModule,
		HttpClientModule,
		ThemeModule,
		AvatarModule,
		NgxMaskModule.forRoot(options)
	],
	declarations: [
		VendorsComponent,
		VendorAddComponent,
		VendorAddCarListComponent,
		VendorListComponent,
		VendorAddInfoComponent,
		CarInput
	],
	entryComponents: [ UploadImageComponent, CarInput ]
})
export class VendorsModule {}
