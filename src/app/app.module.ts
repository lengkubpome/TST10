import { ThemeModule } from './theme/theme.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './navbar/navbar.component';
// import { VendorsComponent } from './pages/vendors/vendors.component';
// import { VendorDetailComponent } from './pages/vendors/detail/detail.component';
import { UploadImageComponent } from './public/components/upload-image/upload-image.component';
import { VendorsModule } from './pages/vendors/vendors.module';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavBarComponent,
		UploadImageComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		HttpClientModule,
		ThemeModule,
		AvatarModule,
		ImageCropperModule,
		VendorsModule,
	],
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'th-TH' } //เพิ่ม MAT_DATE_LOCALE เข้าไปครับ
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
