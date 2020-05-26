import { NgModule } from '@angular/core';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

const MaterialTheme = [
	MatButtonModule,
	MatToolbarModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatInputModule,
	MatTableModule,
	MatMenuModule,
	MatDialogModule,
	MatDividerModule,
	MatRippleModule,
	MatCardModule,
	MatStepperModule,
	MatProgressBarModule,
	MatSliderModule,
	MatProgressSpinnerModule,
	MatTooltipModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatSelectModule,
	MatAutocompleteModule,
	MatFormFieldModule,
	MatTabsModule
];

const BoostrapTheme = [];

@NgModule({
	declarations: [],
	imports: [ MaterialTheme ],
	exports: [ MaterialTheme ],
	providers: []
})
export class ThemeModule {}
