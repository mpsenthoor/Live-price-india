import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Managements/dashboard/dashboard.component';
import { HttpClientModule} from  '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

import { ProductListComponent } from './Managements/product-list/product-list.component';
import { ProductAddEditComponent } from './Managements/product-add-edit/product-add-edit.component';
import { CategoryListComponent } from './Managements/category-list/category-list.component';
import { CategoryAddEditComponent } from './Managements/category-add-edit/category-add-edit.component';
import { MaterialModule } from './Material/material.module';
import { ProductPriceComponent } from './Managements/product-price/product-price.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { StateAddEditComponent } from './Managements/state-add-edit/state-add-edit.component';
import { StateListComponent } from './Managements/state-list/state-list.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductListComponent,
    ProductAddEditComponent,
    CategoryListComponent,
    CategoryAddEditComponent,
    ProductPriceComponent,
    ConfirmDeleteComponent,
    StateAddEditComponent,
    StateListComponent,
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
   
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
