import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { DeleteServiceService } from 'src/app/Delete-service/delete-service.service';
import { NotificationsService } from 'src/app/Notification/notifications.service';
import { ApiServicesService } from 'src/app/Services/api-services.service';



export interface CategoryDataForm {
  
  position : number;
  categoryName : string;
  categoryImage : string;
  categoryStatus : number;
}

const categoryList: CategoryDataForm[] = []

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {


  displayedColumns: string[] = [ 'categoryName', 'categoryStatus', 'categoryImage','Edit', 'Delete'];
  dataSource = new MatTableDataSource<CategoryDataForm>(categoryList);


  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(
    private apiService : ApiServicesService,
    private router : Router,
    private notification : NotificationsService,
    private deleteService : DeleteServiceService, 
  ){}

categoryList:any

  //  deleteConfirmation : Boolean;


imagePath:string="http://geserve-pc-3/livepriceindia/notes/"

  ngOnInit(): void {
   this. getAllCategoryList()
  }

  moveToCategoryForm(){
    this.router.navigate(['category'])
  }

  getAllCategoryList(){
    var formData = new FormData();
    formData.append("action", "getCategoryList");
    this.apiService.addCategoryToApi(formData).subscribe(
      (res:any)=>{
        console.log(res);
        this.categoryList=res
        this.dataSource.data=res
      }
    )
  }


  openConfirmDialog(categoryId:any){
    this.deleteService.openConfirmDialog("Are you sure want to remove this category permanently ?")
    .afterClosed().subscribe(
      (res:any)=>{
// console.log(res)
        // this.deleteConfirmation=res
       if (res) {
         this.deleteCategory(categoryId)
 
       }

      }
    )
  }



  deleteCategory(categoryId:any){
    
    var formData = new FormData();
    formData.append("action", "deleteCategory")
    formData.append("category_id",categoryId)

    this.apiService.addCategoryToApi(formData).subscribe(
      (res:any)=>{
        console.log(res)
        this.categoryList=res;
        this.dataSource.data=res;
        
        // alert("Are you sure want to remove this category")
        location.reload();

this.notification.success('! Category deleted successfully')
      }
    )
  }


  connectToCategoryEdit( type:any, category_id:any){
   this.router.navigate(['category'],{state:{action:type, id: category_id}})
  }

}



