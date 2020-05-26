import { Component, OnInit, Input, Inject } from '@angular/core';
import {
	ImageCroppedEvent,
	ImageTransform,
	Dimensions,
	CropperPosition
} from 'ngx-image-cropper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSliderChange } from '@angular/material/slider';

@Component({
	selector: 'app-upload-image',
	templateUrl: './upload-image.component.html',
	styleUrls: [ './upload-image.component.scss' ]
})
export class UploadImageComponent implements OnInit {
	imageChangedEvent: any = '';
	imageFile: any = '';
	croppedImage: any = '';
	canvasRotation = 0;
	rotation = 0;
	scale = 1;
	showCropper = false;
	containWithinAspectRatio = true;
	transform: ImageTransform = {};
	cropperPosition: CropperPosition;
	imageCroppedEvent: ImageCroppedEvent;

	loadding = false;
	loadFail = false;

	constructor(
		public dialogRef: MatDialogRef<UploadImageComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		// load image
		this.loadding = true;
		this.imageFile = this.data.profile.input;
		this.transform = { ...this.transform, ...this.data.profile.transform };
		this.imageCroppedEvent = this.data.profile.croppedImage;
		this.cropperPosition = { x1: 0, y1: 0, x2: 100, y2: 100 };
	}

	onSave(): void {
		var result = {
			croppedImage: this.croppedImage,
			transform: this.transform
		};
		this.dialogRef.close(result);
	}

	imageCropped(event: ImageCroppedEvent) {
		this.croppedImage = event;
	}

	imageLoaded() {
		console.log('Image loaded');
    this.showCropper = true;

	}

	cropperReady(sourceImageDimensions: Dimensions) {
		console.log('Cropper ready', sourceImageDimensions);
		if (this.imageCroppedEvent == null) {
			this.cropperPosition = {
				x1: 0,
				y1: 0,
				x2: sourceImageDimensions.width,
				y2: sourceImageDimensions.height
			};
		} else {
      this.cropperPosition = this.imageCroppedEvent.cropperPosition;
      this.rotation = this.data.profile.transform.rotate
		}

		this.loadding = false;
	}

	loadImageFailed() {
    console.log('Load failed');
    this.loadding = false;
    this.loadFail = true;
	}

	onRotate(event: MatSliderChange) {
		this.transform = {
			...this.transform,
			rotate: event.value
		};
	}

	onRotateLeft90() {
		this.canvasRotation--;
		this.flipAfterRotate();
	}

	onRotateRight90() {
		this.canvasRotation++;
		this.flipAfterRotate();
	}

	private flipAfterRotate() {
		const flippedH = this.transform.flipH;
		const flippedV = this.transform.flipV;
		this.transform = {
			...this.transform,
			flipH: flippedV,
			flipV: flippedH
		};
	}

	flipHorizontal() {
		this.transform = {
			...this.transform,
			flipH: !this.transform.flipH
		};
	}

	flipVertical() {
		this.transform = {
			...this.transform,
			flipV: !this.transform.flipV
		};
	}

	resetImage() {
		this.scale = 1;
		this.rotation = 0;
		this.canvasRotation = 0;
		this.transform = {};
	}

	zoomOut() {
		this.scale -= 0.1;
		this.transform = {
			...this.transform,
			scale: this.scale
		};
	}

	zoomIn() {
		this.scale += 0.1;
		this.transform = {
			...this.transform,
			scale: this.scale
		};
	}

	toggleContainWithinAspectRatio() {
		this.containWithinAspectRatio = !this.containWithinAspectRatio;
	}

	updateRotation() {
		this.transform = {
			...this.transform,
			rotate: this.rotation
		};
	}

	formatLabel(value: number) {
		return `${value}°`;
	}
}
