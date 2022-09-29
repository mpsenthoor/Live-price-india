import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/Notification/notifications.service';
import { ApiServicesService } from 'src/app/Services/api-services.service';


@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.css']
})
export class CategoryAddEditComponent implements OnInit {

  categoryForm : FormGroup;
submitted=false

  constructor(
    private fb:FormBuilder,
    private apiService : ApiServicesService,
    private router : Router,
    private notification : NotificationsService,
   ) {

   this.categoryForm= this.fb.group({
 categoryName : ["",Validators.required],
  active:[''],
 categoryImage : [''],

   }) 
  }
   
  imagePath:string="http://geserve-pc-3/livepriceindia/notes/"

  categoryImage:any
  imageSource: any

categoryName: any;


formType:any
editCategoryId:any
editImage:any
active:any

  ngOnInit(): void {
  // console.log(history.state)
  this.formType= history.state.action;
  if (history.state.action== 'editCategory') {
    this.editCategoryData(history.state.id);
    this.editCategoryId=(history.state.id)
  }
  }



  editCategoryData(id:any){

var formData= new FormData();
formData.append("action", "getCategory")
formData.append("category_id", id)

this.apiService.addCategoryToApi(formData).subscribe(
  (res:any)=>{
    console.log(res)
    this.editImage= res.categoryImage
    this.categoryForm.setValue({
      categoryName: res.categoryName,
       active: res.categoryStatus,
      categoryImage: res.categoryImage
    })
  }
)
  }


  addCategory(){
   
   var formData = new FormData();
 

if(this.formType =='editCategory' ){
formData.append("action","updateCategory");
formData.append("category_id",this.editCategoryId);
this.notification.success('! Category Updated successfully')

}
else{
   formData.append("action", "addCategory");
  this.notification.success('! Category added successfully') }
   formData.append("categoryName", this.categoryForm.controls['categoryName'].value)

   formData.append("categoryStatus",(this.categoryForm.controls['active'].value == true)?'1' : '0')
  
   formData.append("categoryImage", this.categoryImage)

   this.apiService.addCategoryToApi(formData).subscribe(
   (res:any)=>{
    console.log(res)

    this.router.navigate(['categoryList'])
   }
   )
return formData;

  
  

  }


  uploadImage(event:any){

this.categoryImage = event.target.files[0];
if(event.target.files && event.target.files[0]){
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = e =>this.imageSource=reader.result
  reader.readAsDataURL(file);
}
// console.log(this.categoryImage)
  }


  removeSelectedImage(){
var formData = new FormData();
formData.append("action", "removeCategoryImage")
formData.append("category_id", this.editCategoryId)
formData.append("categoryImage", this.editImage)


this.apiService.addCategoryToApi(formData).subscribe(
  (res:any)=>{
    console.log(res)
    this.editImage=""
    
  }
)
  }

  removeImage(){
this.imageSource=""
  }

  get f() :{ [key: string]: AbstractControl; } {
    return this.categoryForm.controls;
  }


  backToList(){
    this.router.navigate(['categoryList'])
  }

  }








  