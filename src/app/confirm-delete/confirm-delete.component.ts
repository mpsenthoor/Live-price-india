import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {
data:any
  constructor(
   
private dialogRef : MatDialogRef<ConfirmDeleteComponent>

  ) { }

  ngOnInit(): void {
  }

}
