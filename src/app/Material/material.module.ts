import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatRippleModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    
    
  ],

  exports:[
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatRippleModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatAutocompleteModule,
  ]
})
export class MaterialModule { }
