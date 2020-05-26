import { Component, OnInit, Output, EventEmitter, ElementRef, Self, Optional, Input, OnDestroy } from '@angular/core';
import {
	Province,
	ProvinceService
} from 'src/app/public/services/province.service';
import { Observable, Subject } from 'rxjs';
import {
	FormBuilder,
	Validators,
	FormGroup,
	FormArray,
	ValidatorFn,
	FormControl,
  NgControl,
  ControlValueAccessor
} from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
	selector: 'vendor-add-car-list',
	templateUrl: './car-list.component.html',
	styleUrls: [ './car-list.component.scss' ]
})
export class VendorAddCarListComponent implements OnInit {
  @Output() private formReady = new EventEmitter<FormGroup>();
	carsFormGroup: FormGroup;

	cars = new FormArray([]);
  filteredProvinces: Observable<Province[]>[] = [];

	// Stepper 2
	provinces: Province[] = [];
	carType = [
		'กระบะ',
		'บรรทุก 6 ล้อ',
		'บรรทุก 10 ล้อ',
		'อีแต๋น',
		'สามล้อพ่วง'
  ];

  public customPatterns = { 'X': { pattern: new RegExp('.')},
  '0': { pattern: new RegExp('\[0-9\]')} };

	constructor(
		private provinceService: ProvinceService,
		private fb: FormBuilder
	) {
		// Stepper 2
		this.provinceService.getProvinces().subscribe((data) => {
			this.provinces = data;
		});
	}

	ngOnInit() {
    this.initForm();
    this.formReady.emit(this.carsFormGroup);
	}

	private initForm() {

		this.carsFormGroup = this.fb.group({
			cars: this.initCar()
    });

    // ค่าเริ่มต้นในการแสดงช่องกรอกข้อมูลรถ
    // this.CarControl(0);
    // this.CarControl(1);
  }

  private initCar() {
    var formArray = this.fb.array([]);

    // i = จำนวนช่องกรอกข้อมูลเริ่มต้น
    // for (let i = 0; i < 1; i++) {
    //   formArray.push(this.fb.group({
    //     id: ['', [Validators.required]],
		// 		province: ['ขอนแก่น', [Validators.required]],
    //     type: ['', [Validators.required]]
    //   }));
    // }
    return formArray;
  }

  CarControl(index: number) {
    var arrayControl = this.carsFormGroup.get('cars') as FormArray;
    this.filteredProvinces[index] = arrayControl.at(index).get('province').valueChanges
      .pipe(
      startWith<string | Province>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.provinces.slice())
      );

  }


  private _filter(name: string): Province[] {
    const filterValue = name.toLowerCase();

    return this.provinces.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  addCar() {
    const controls = <FormArray>this.carsFormGroup.controls['cars'];
    let formGroup = this.fb.group({
      id: ['', [Validators.required]],
      province: ['ขอนแก่น', [Validators.required]],
      type: ['', [Validators.required]]
    });
    controls.push(formGroup);
    // Build the account Auto Complete values
    this.CarControl(controls.length - 1);

  }
   removeCar(i: number) {
    const controls = <FormArray>this.carsFormGroup.controls['cars'];
    controls.removeAt(i);
    // remove from filteredOptions too.
    this.filteredProvinces.splice(i, 1);

  }

	getControls() {
		return (<FormArray>this.carsFormGroup.get('cars')).controls;
	}

  check(){
    console.log(this.carsFormGroup.value);

  }
}
