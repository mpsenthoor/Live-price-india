import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/Services/api-services.service';


export interface StateDataForm {
  id: number;
  StateName: string;
}
const stateList: StateDataForm[] = [];

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})


export class StateListComponent implements OnInit {

  
  displayedColumns: string[] = ['StateName', 'Edit', 'Delete'];
  dataSource = new MatTableDataSource<StateDataForm>(stateList);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  stateList: any;
  formData: any


  constructor(private apiService: ApiServicesService,
    private router: Router,) { }

  ngOnInit(): void {
    this.getAllStateList();
  }



  getAllStateList() {
    var formData = new FormData();
    formData.append("action", "AllStateList");
    this.apiService.getStateList(formData).subscribe(

      (res: any) => {
        console.log(res)
        this.stateList = res;
        this.dataSource.data = res
      }
    )
  }


  deleteState(StateId: any) {

    var formData = new FormData();
    formData.append("action", "StateDelete")
    formData.append("StateId", StateId)

    this.apiService.addStateToApi(formData).subscribe(
      (res: any) => {
        console.log(res)
        this.stateList = res;
         this.dataSource.data = res;
        alert("Are you sure want remove this product")
        location.reload();

      }
    )
    // this.notification.success('! Product deleted successfully')
  }

  

  
moveToStateForm(){
  this.router.navigate(['state'])
}


  editState(type:any,stateid:any) {
    this.router.navigate(['state'],{state:{action:type,id:stateid}});
  }


}
