 import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  // msg:any
  constructor(
    private dialog:MatDialog,
  ) { }

  openConfirmDialog(msg:any){
    return this.dialog.open(ConfirmDeleteComponent,{
      width:"300px",
      panelClass:'borderless-dialog',
      disableClose: true,
      data:{
        message:msg
      }
    })
  }
}
