import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/Notification/notifications.service';
import { ApiServicesService } from 'src/app/Services/api-services.service';


@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {


  productForm: FormGroup
submitted= false;

states: string[] = [ "laptop","Mobile","watch" ];

  constructor(
private apiService: ApiServicesService,
private router : Router,
private fb: FormBuilder,
private notificationService : NotificationsService,
// private sanitizer: DomSanitizer,
// private productForm: FormGroup

  ) {
    this.productForm = this.fb.group({
      categoryName : ['',Validators.required],
      productName  : ['',Validators.required],
      active:[''],
      productImage : [''],
    })

  }

  imagePath:string="http://geserve-pc-3/livepriceindia/notes/"
  // categoryFormName=[]

  categoryName:any;
  productName: any;
  // category_id=[];
  productImage:any;
active:any;
checked:boolean=false;

  formType:any;
  editProductId : any
  editImage:any

   imageSrc : any;
  element:any

  ngOnInit(): void {
  //  this. getCategoryName()
  // console.log(history.state)
  this.formType=history.state.action;
  if(history.state.action=='editProduct'){
this.editProductData(history.state.id);
this.editProductId=(history.state.id)
  }
  }


editProductData(id: any){
  var formData = new FormData();
  formData.append("action", "SingleProductList");
  formData.append("ProductId",id)
  this.apiService.addProductToApi(formData).subscribe(
    (res:any)=>{
      // console.log(res)
      this.editImage=res.ProductImage
      this.productForm.setValue({
        categoryName : res.category_id,
        productName: res.ProductName,
        active: res.ProductStatus,
        productImage : res.ProductImage
      })
    }
  )
}


// Get Category name...

  // getCategoryName(){
  //   var formData= new FormData();
  //   formData.append("action","getCategoryList");
  //   this.apiService.getAllCategory(formData).subscribe(
  //     (res:any)=>{
        // console.log(res)
        // res.forEach((element:any) => {this.categoryName.push( element.categoryName)
        //   // this.category_id+=element.category_id
          
        // });
  // this.categoryName=this.categoryFormName;
  // console.log(this.categoryFormName)

        // console.log(this.categoryName)
        // console.log(this.category_id)
  //     }
  //   )
  // } 

  
  //  Add Product 

  addProduct(){

    // console.log(this.productForm.value)
    this.submitted=true;
//  console.log(this.productForm);
// var image = <HTMLInputElement>document.getElementById('uploadFile')
// var file = image.value
// this.imageSrc=file;
// console.log(file)




var formData = new FormData();
if(this.formType =='editProduct'){
  formData.append('action','ProductUpdate');
  formData.append('ProductId',this.editProductId);
  this.notificationService.success(	'! product updated successfully')
}
else{
formData.append("action","ProductAdd");
this.notificationService.success('! product added successfully')}
formData.append("categoryName", this.productForm.controls['categoryName'].value)
formData.append("ProductName", this.productForm.controls['productName'].value)

 formData.append("ProductStatus",(this.productForm.controls['active'].value == true)?'1' : '0')

formData.append("ProductImage", this.productImage)

// console.log(formData.get("ProductImage"))

this.apiService.addProductToApi(formData).subscribe(
  (res:any)=>{
    console.log(res)
    this.router.navigate(['productList'])
   
  }

  
)

return formData;

  
  }


  uploadImage(event: any){
    // console.log(event.target.files)

    this.productImage = event.target.files[0];
    // console.log(this.productImage)
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }

    // this.productImage = event.target.files[0];
    // if(event.target.files){
    //   // console.log(event.target.files)
    //   var reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   // console.log(event.target.files[0])
     

    //   reader.onload=(e:any)=>this.imageSrc=event.target.result;
    //   // console.log(event.target.result)
    // }

  }

  
      
  removeSelectedImage(){
    var formData = new FormData();
    formData.append("action", "removeSavedImage")
    formData.append("ProductId",this.editProductId)
    formData.append("ProductImage", this.editImage)

    this.apiService.addProductToApi(formData).subscribe(
      (res:any)=>{
        console.log(res)
        this.editImage=""
  })
  }

  removeImages(){
    this.imageSrc=""
  }

  get f():{[key:string]:AbstractControl}
{
    return this.productForm.controls;
}


backToList(){
  this.router.navigate(['productList'])
}

}
