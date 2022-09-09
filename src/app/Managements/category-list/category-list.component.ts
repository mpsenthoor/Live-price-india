import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SafeUrl } from '@angular/platform-browser';




export interface Category {
 categoryName : string,
 categoryImage : FileHandle[],
}

export interface FileHandle {
  file:File,
  url: SafeUrl
 }

const ELEMENT_DATA: Category[] = [
 
];

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Category>(ELEMENT_DATA);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor() {

  
   }

  ngOnInit(): void {
  }

}
