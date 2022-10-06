import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServicesService } from 'src/app/Services/api-services.service';



export interface PeriodicElement {
  price: number;
  date: Date;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
  

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.css']
})
export class PriceHistoryComponent implements OnInit {

  displayedColumns: string[] = ['price', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(
private apiService : ApiServicesService,
    public dialogRef : MatDialogRef<PriceHistoryComponent>
  ) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.dialogRef.id))
    this.priceHistoryList();
    
  }


  priceHistoryList(){
    var formData = new FormData();
    formData.append("action","priceHistory")
    this.apiService.getPriceHistory(formData).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }

  onClose(){
    this.dialogRef.close();
  }

}
