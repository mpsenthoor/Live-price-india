import { Component, OnInit } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import { ProductPriceComponent } from '../product-price/product-price.component';
import {ViewEncapsulation} from '@angular/core';
import { NotificationsService } from 'src/app/Notification/notifications.service';

export interface ProductDataForm {
  position: number;
  categoryName: string;
  productName: string,
  productImage: string;
  productStatus: number;
}

export interface FileHandle {
  file: File,
  url: SafeUrl
}

const productList: ProductDataForm[] = [];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  displayedColumns: string[] = ['productName','productStatus', 'productImage', 'price', 'date', 'addPrice', 'Edit', 'Delete'];
  dataSource = new MatTableDataSource<ProductDataForm>(productList);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  productList: any;
  formData: any

  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    public dialog: MatDialog,
    private notification : NotificationsService,
  ) { }


  imagePath: string = "http://geserve-pc-3/livepriceindia/notes/"

  ngOnInit(): void {
    this.getAllProductList();
  }

  moveToProductForm() {
    this.router.navigate(['product']);
  }


  getAllProductList() {
    var formData = new FormData;
    formData.append("action", "AllProductList");
    this.apiService.getProductList(formData).subscribe(

      (res: any) => {
        console.log(res)
        this.productList = res;
        this.dataSource.data = res
      }
    )
  }


  deleteProduct(ProductId: any) {

    var formData = new FormData();
    formData.append("action", "ProductDelete")
    formData.append("ProductId", ProductId)

    this.apiService.addProductToApi(formData).subscribe(
      (res: any) => {
        console.log(res)
        this.productList = res;

        this.dataSource.data = res;
        alert("Are you sure want remove this product")
        location.reload();
        // this.dataSource=new MatTableDataSource<ProductDataForm>;
     this.notification.success('! Product deleted successfully')

      }
    )
    // this.notification.success('! Product deleted successfully')
  }


  connectToProductEdit(type: any, ProductId: any) {
    this.router.navigate(['product'], { state: { action: type, id: ProductId } })

  }


  openPriceDialog() {
//     const dialogConfig = new  MatDialogConfig();
// dialogConfig.disableClose=true;
// dialogConfig.autoFocus=true;
// dialogConfig.width='30%'

    this.dialog.open(ProductPriceComponent,{
      width:'30%',
      panelClass:'borderless-dialog',
      disableClose: true,
      autoFocus:true
    }) 
      
 
  }


}
