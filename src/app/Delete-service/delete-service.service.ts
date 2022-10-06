 import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { ProductPriceComponent } from '../Managements/product-price/product-price.component';

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
      width:"30%",
      panelClass:'borderless-dialog',
      disableClose: true,
      data:{
        message:msg
      }
    })
  }

  // openAddPriceDialog() {

  //       this.dialog.open(ProductPriceComponent, {
  //         width:'30%',
  //         panelClass:'borderless-dialog',
  //         disableClose: true,
  //         autoFocus:true,
         
          
  //       }) 
  //     }  
  
}
