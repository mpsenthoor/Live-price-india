import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Category, FileHandle } from '../category-list/category-list.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiServicesService } from 'src/Services/api-services.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.css']
})
export class CategoryAddEditComponent implements OnInit {

  category: Category = {
    categoryName: "",
    categoryImage: [],
  }




  //          Category Api Service start

  jsonUrl = "http://localhost:3000/category"

  baseUrl = "http://geserve-pc-3/livepriceindia/main.php"

  addToCategoryApi(category: FormData) {
    return this.http.post<Category>(this.baseUrl, category)
  }

  //           Category Api Service start

  constructor(
    private http: HttpClient,
    private ApiServicesService: ApiServicesService,
    private sanitizer: DomSanitizer,
  ) { }





  ngOnInit(): void {
  }

  onImageSelected(event: any) {
    // console.log(event)

    if (event.target.files) {
      const file = event.target.files[0];


      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }

      this.category.categoryImage.push(fileHandle);

    }
  }


  // Add Category To Api  // 

  addCategory(categoryForm: NgForm) {
    // console.log(this.category)

    const categoryFormData = this.createFormData(this.category)


    this.addToCategoryApi(categoryFormData).subscribe(
      (res: Category) => {
        console.log(res);

      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }

    )

    categoryForm.reset();

  }


  createFormData(category: Category): FormData {

    const formData = new FormData();
    formData.append("action", "addCategory");

    // formData.append("categoryName", new Blob([JSON.stringify(this.category.categoryName)], { type: "application/json" }));
    formData.append("categoryName",this.category.categoryName );

    for (var i = 0; i < category.categoryImage.length; i++) {

      formData.append("categoryImage",
        category.categoryImage[i].file,
        category.categoryImage[i].file.name,
      )
    }

    return formData;
  }



}


// categoryName = new FormControl('', [Validators.required]);
  // categoryImage = new FormControl('', [Validators.required]);


  // getErrorMessage() {
  //   if (this.categoryName.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.categoryName.hasError('email') ? 'Not a valid email' : '';
  // }
