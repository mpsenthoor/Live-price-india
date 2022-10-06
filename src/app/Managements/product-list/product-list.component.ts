import { Component, OnInit } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import { ProductPriceComponent } from '../product-price/product-price.component';
import { ViewEncapsulation } from '@angular/core';
import { NotificationsService } from 'src/app/Notification/notifications.service';
import { PriceHistoryComponent } from 'src/app/price-history/price-history.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { DeleteServiceService } from 'src/app/Delete-service/delete-service.service';
import * as _ from 'lodash';
import { NgSelectConfig } from '@ng-select/ng-select';

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

export interface searchCategory {
  categoryName: string;
  category_id: number;
}

export interface productOption {
  ProductName: string;
  ProductId: number;

}





const productList: ProductDataForm[] = [];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  states: productOption[] = [];

  //  products:productOption[]=[];

  // status:statusOption[]=[];




  myControl = new FormControl<string | productOption>('');
  filteredOptions: Observable<productOption[]>;



  displayedColumns: string[] = ['categoryName', 'productName', 'productStatus', 'productImage', 'price', 'date', 'addPrice', 'priceHistory', 'Edit', 'Delete'];
  dataSource = new MatTableDataSource<ProductDataForm>(productList);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  productOption: any
  productList: any;
  formData: any

  cityFile: any;
  cityFileSource: any

  filterForm: FormGroup

  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    public dialog: MatDialog,
    private notification: NotificationsService,
    private fb: FormBuilder,
    private deleteService: DeleteServiceService,
    private config: NgSelectConfig,
  ) {

    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }


  imagePath: string = "http://geserve-pc-3/livepriceindia/notes/"

  ngOnInit(): void {


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.ProductName;
        return name ? this._filter(name as string) : this.states.slice();
      }),
    );

    this.getAllProductList();
  }

  displayFn(user: productOption): string {
    return user && user.ProductName ? user.ProductName : '';
  }


  private _filter(name: string): productOption[] {
    const filterValue = name.toLowerCase();

    return this.states.filter(option => option.ProductName.toLowerCase().includes(filterValue));
  }






  // this.dataSource= new MatTableDataSource(filteredData)

  clearFilters() {

    this.dataSource.filter = '';
    this.productOption.ProductName = ""
  }

  onChangeCity(event: any) {
    this.cityFile = event.target.files[0];
    // console.log(this.productImage)
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.cityFileSource = reader.result;

      reader.readAsDataURL(file);
    }
  }


  onUploadCity() {

  }

  moveToProductForm() {
    this.router.navigate(['product']);
  }

  // getProductNames(){
  //   var formData = new this.formData();
  //   formData.append("action","")
  // }




  getAllProductList() {

    var formData = new FormData;
    formData.append("action", "AllProductList");
    this.apiService.getProductList(formData).subscribe(

      (res: any) => {
        // console.log(res)
        this.productList = res;
        this.dataSource.data = res

        this.states = res
        // this.products=res
        // this.status=res

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


  openAddPriceDialog(ProductId: any) {

    this.dialog.open(ProductPriceComponent, {
      width: '30%',
      panelClass: 'borderless-dialog',
      disableClose: true,
      autoFocus: true,
      id: ProductId
    })

  }

  //   openAddPrice( ProductId: any){
  // this.deleteService.openAddPriceDialog(),({state: {  id: ProductId  }})
  //   }


  openPriceHistoryDialog(id:any) {

    this.dialog.open(PriceHistoryComponent, {
      width: '35%',
      height: '75%',
      panelClass: 'borderless-dialog',
      disableClose: true,
      autoFocus: true,
      id :'{"price":"12","catname":"furniture"}',
    })
  }


}
