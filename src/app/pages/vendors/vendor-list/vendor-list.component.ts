import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTableDataSource } from '@angular/material/table';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { VendorAddComponent } from '../vendor-add/vendor-add.component';

import { VendorDetail, VENDOR_DATA } from './../vandor.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vendor-list',
	templateUrl: './vendor-list.component.html',
	styleUrls: [ './vendor-list.component.scss' ]
})
export class VendorListComponent implements OnInit {
	@ViewChild(MatMenuTrigger) triggerMenu: MatMenuTrigger;

	contextMenuPosition = { x: '0px', y: '0px' };

	// Table
	displayedColumns: string[] = [ 'fullName', 'carList', 'phone' ];
	columnsToDisplay: string[] = this.displayedColumns.slice();
	data: VendorDetail[] = VENDOR_DATA;
	dataSource = new MatTableDataSource(VENDOR_DATA);

	constructor(private router: Router, public dialog: MatDialog) {}

	ngOnInit() {}

	onAddVendor(): void {
    this.router.navigateByUrl('vendors/add');
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	onContextMenu(event: MouseEvent, vendor: VendorDetail) {
		event.preventDefault();
		this.contextMenuPosition.x = event.clientX + 'px';
		this.contextMenuPosition.y = event.clientY + 'px';
		this.triggerMenu.menuData = { vendor };
		this.triggerMenu.menu.focusFirstItem('mouse');
		this.triggerMenu.openMenu();
	}

	onContextMenuAction1(vendor: VendorDetail) {
		console.log(`Click on Action 1 for ${vendor.id}`);
	}

	onContextMenuAction2(vendor: VendorDetail) {
		console.log(`Click on Action 2 for ${vendor.id}`);
	}
}
