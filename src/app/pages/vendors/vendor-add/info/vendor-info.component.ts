import { Observable } from 'rxjs';
import {
	ProvinceService,
	Province
} from 'src/app/public/services/province.service';
import {
	Component,
	OnInit,
	ViewChild,
	Input,
	Output,
	EventEmitter
} from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UploadImageComponent } from 'src/app/public/components/upload-image/upload-image.component';
import { map, startWith, debounce, debounceTime } from 'rxjs/operators';

export interface Profile {
	input: File;
	imageProfile: any;
	croppedImage: any;
	transform: any;
	hasFile: boolean;
}

@Component({
	selector: 'vendor-add-info',
	templateUrl: './vendor-info.component.html',
	styleUrls: [ './vendor-info.component.scss' ]
})
export class VendorAddInfoComponent implements OnInit {
	@Output() private formReady = new EventEmitter<FormGroup>();
	@ViewChild('fileUpload') fileUpload: any;

	infoFormGroup: FormGroup;

	profile: Profile = {
		input: null,
		imageProfile: null,
		croppedImage: null,
		transform: null,
		hasFile: false
	};

	defaultImageProfile = 'assets/images/account.png';

	provinces: Province[] = [];
	filteredProvinces: Observable<Province[]>;

	constructor(
		private fb: FormBuilder,
		private provinceService: ProvinceService,
		public dialog: MatDialog
	) {
		this.provinceService.getProvinces().subscribe((data) => {
			this.provinces = data;
		});
	}

	ngOnInit() {
		// Stepper 1
		// set image default
		this.profile.imageProfile = this.defaultImageProfile;

		this.infoFormGroup = this.fb.group({
			profile: [ '' ],
			firstname: [ '', Validators.required ],
			lastname: [ '', Validators.required ],
			id: [ '', Validators.required],
      birthdate: [ ''],
      phone: [ '' ],
			address: this.fb.group({
				address1: [ '', Validators.required ],
				city: [ '', Validators.required ],
				province: [ 'ขอนแก่น', Validators.required ],
			})
		});

		this.filteredProvinces = this.infoFormGroup
			.get('address.province')
			.valueChanges.pipe(
				startWith<string | Province>(''),
				map((value) => (typeof value === 'string' ? value : value.name)),
				map((name) => (name ? this._filter(name) : this.provinces.slice()))
			);

		this.formReady.emit(this.infoFormGroup);
  }

	// เช็คว่ามีรูปเก่าหรือไม้
	onGetFile(): void {
		if (this.profile.imageProfile !== this.defaultImageProfile) {
			this.onUploadImage(this.profile);
		} else {
			this.fileUpload.nativeElement.click();
		}
	}

	getFile(event: any) {
		if (event.target.files && event.target.files[0]) {
			this.profile.input = event.target.files[0];
			this.onUploadImage(this.profile);
		}
	}

	onUploadImage(profile: Profile): void {
		const dialogRef = this.dialog.open(UploadImageComponent, {
			disableClose: true,
			width: '100%',
			data: { profile }
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result !== undefined) {
				this.profile = {
					...this.profile,
					imageProfile: result.croppedImage.base64,
					croppedImage: result.croppedImage,
					transform: result.transform,
					hasFile: true
				};
			}
			this.fileUpload.nativeElement.value = ''; //ลบไฟล์ใน fileUpload
		});
	}

	onDeleteImageProfile() {
		this.profile = {
			input: null,
			imageProfile: this.defaultImageProfile,
			croppedImage: null,
			transform: null,
			hasFile: false
		};
		this.fileUpload.nativeElement.value = '';
	}

	private _filter(name: string): Province[] {
		const filterValue = name.toLowerCase();

		return this.provinces.filter(
			(option) => option.name.toLowerCase().indexOf(filterValue) === 0
		);
	}
}
