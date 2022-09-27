import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  amountCtrl = new FormControl(null, { updateOn: 'blur' });

  constructor(
    public dialogRef : MatDialogRef<ProductListComponent>
  ) { }


  amount:any
  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close();
  }

}
