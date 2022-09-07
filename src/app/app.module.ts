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





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductListComponent,
    ProductAddEditComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
   
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
