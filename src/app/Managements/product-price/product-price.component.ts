import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  productPrice: FormGroup

  constructor(
    private fb: FormBuilder,
    private apiService : ApiServicesService,
    public dialogRef : MatDialogRef<ProductListComponent>
    
  ) {
this.productPrice=this.fb.group({
  productPrice : ['']
})

   }
   formType:any

   ProductId:any

  amount:any
  ngOnInit(): void {

   
  }

addPrice(productId:any){
  console.log(this.productPrice.value)

  var formData= new FormData();
  formData.append("action","addPrice")
  formData.append("productPrice", this.productPrice.controls['productPrice'].value)
  formData.append("ProductId",productId)

  this.apiService.addProductPriceToApi(formData).subscribe(
    (res:any)=>{
      console.log(res)
    }
  )
}

  onClose(){
    this.dialogRef.close();
  }

}
