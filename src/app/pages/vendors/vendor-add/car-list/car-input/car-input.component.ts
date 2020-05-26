import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Component, ElementRef, Input, OnDestroy, Optional, Self} from '@angular/core';
import {FormBuilder, FormGroup, ControlValueAccessor, NgControl, Validators} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs';



/** Data structure for holding telephone number. */
export class CarId {
  constructor(public area: string, public exchange: string) {}
}

/** Custom `MatFormFieldControl` for telephone number input. */
@Component({
  selector: 'car-input',
  templateUrl: './car-input.component.html',
  styleUrls: ['./car-input.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: CarInput}],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})

export class CarInput implements ControlValueAccessor, MatFormFieldControl<CarId>, OnDestroy {
  static nextId = 0;


  public customPatterns = { 'X': { pattern: new RegExp('.')},
  '0': { pattern: new RegExp('\[0-9\]')} };


  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  controlType = 'car-input';
  id = `car-input-${CarInput.nextId++}`;
  describedBy = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  get empty() {
    const {value: {area, exchange}} = this.parts;

    return !area && !exchange;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): CarId | null {
    if (this.parts.valid) {
      const {value: {area, exchange}} = this.parts;
      return new CarId(area, exchange);
    }
    return null;
  }
  set value(tel: CarId | null) {
    const {area, exchange} = tel || new CarId('', '');
    this.parts.setValue({area, exchange});
    this.stateChanges.next();
  }

  constructor(
    formBuilder: FormBuilder,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl) {

    this.parts = formBuilder.group({
      area: [null, [Validators.required]],
      exchange: [null, [Validators.required]],
    });

    _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next();
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this._elementRef.nativeElement.querySelector('input')!.focus();
    }
  }

  writeValue(tel: CarId | null): void {
    this.value = tel;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _handleInput(): void {
    this.onChange(this.value);
  }

  static ngAcceptInputType_disabled: boolean | string | null | undefined;
  static ngAcceptInputType_required: boolean | string | null | undefined;
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
