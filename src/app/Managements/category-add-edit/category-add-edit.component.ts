import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.css']
})
export class CategoryAddEditComponent implements OnInit {




  categoryName = new FormControl('', [Validators.required]);
  categoryImage = new FormControl('', [Validators.required]);


  getErrorMessage() {
    if (this.categoryName.hasError('required')) {
      return 'You must enter a value';
    }

    return this.categoryName.hasError('email') ? 'Not a valid email' : '';
  }


  constructor() { }


  
  uploadFileEvt(event:any){

  }

  ngOnInit(): void {
  }

}
