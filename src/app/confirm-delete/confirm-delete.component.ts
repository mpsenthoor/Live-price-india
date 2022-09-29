import { Component, OnInit,Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(
   @Inject(MAT_DIALOG_DATA) public data:any,

private dialogRef : MatDialogRef<ConfirmDeleteComponent>

  ) { }

  ngOnInit(): void {
  }


closeDeleteDialog(){
  this.dialogRef.close();
}

}
