import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/Services/api-services.service';



export interface cityDataForm {
  state: string;
 
  city: string;
}
const cityList: cityDataForm[] = []

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})



export class CityListComponent implements OnInit {

  

  displayedColumns: string[] = [ 'state', 'city','Edit', 'Delete'];
  dataSource = new MatTableDataSource<cityDataForm>(cityList);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private router : Router,
    private apiService : ApiServicesService,
  ) { }

  ngOnInit(): void {

    this.getCityList();
  }

  cityList:any

  moveToCityForm(){
this.router.navigate(['city'])
  }

  getCityList(){
    var formData=new FormData();
    formData.append("action","getAllCityList");
    this.apiService.addCityToApi(formData).subscribe(
      (res:any)=>{
        console.log(res)

        this.cityList = res;
        this.dataSource.data = res
      }
    )
  }

  deleteCity(cityId:any){
    var formData = new FormData();
    formData.append("action","deleteCity");
    formData.append("cityId",cityId)

    this.apiService.addCityToApi(formData).subscribe(
      (res:any)=>{
        console.log(res)
        location.reload();
        this.cityList=res;
        this.dataSource.data=res;
        
      }
    )

  }


  connectToProductEdit(type:any,cityId:any){
this.router.navigate(['city'],{state:{action:type,id:cityId}})
  }

}
