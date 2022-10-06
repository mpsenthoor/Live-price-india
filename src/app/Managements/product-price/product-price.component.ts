import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import { ProductListComponent } from '../product-list/product-list.component';


export interface state {
  cityName: string;
  cityId: number;
}

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  productPrice: FormGroup

  states: state[] = []

  constructor(
    private fb: FormBuilder,
    private router : Router,
    private apiService : ApiServicesService,
    public dialogRef : MatDialogRef<ProductListComponent>
    
  ) {
this.productPrice=this.fb.group({
  cityName : [''],
  productPrice : ['']
})

   }
   
   formType:any

   ProductId:any

  amount:any
  ngOnInit(): void {
    console.log(JSON.stringify(this.dialogRef.id));
    // console.log(history.state)
    // this.formType = history.state.action;
    // if (history.state.action == 'addProduct') {
    //   this.addPrice(history.state.id);
    //   this.ProductId = (history.state.id)
    // }
    
   this.getCityName();
  }

addPrice(){
  // console.log(this.productPrice.value)

  var formData= new FormData();
  formData.append("action","addPrice")
  formData.append("productPrice", this.productPrice.controls['productPrice'].value)
  formData.append("cityId", this.productPrice.controls['cityName'].value)
  formData.append("ProductId",this.dialogRef.id)

  this.apiService.addProductPriceToApi(formData).subscribe(
    (res:any)=>{
      console.log(res)

      this.dialogRef.close();
    }
  )
}

getCityName(){
var formData = new FormData();
formData.append("action","getAllCityList")
this.apiService.addCityToApi(formData).subscribe(
  (res:any)=>{
    // console.log(res)
    this.states=res
  }
)

}



  onClose(){
    this.dialogRef.close();
  }

}
