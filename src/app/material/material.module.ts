import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatGridListModule,
  ], exports:[
    MatAutocompleteModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatGridListModule,
  ]
})
export class MaterialModule { }
