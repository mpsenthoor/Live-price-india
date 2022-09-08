import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes  } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Managements/dashboard/dashboard.component';
import { ProductListComponent } from './Managements/product-list/product-list.component';
import { ProductAddEditComponent } from './Managements/product-add-edit/product-add-edit.component';
import { CategoryListComponent } from './Managements/category-list/category-list.component';
import { CategoryAddEditComponent } from './Managements/category-add-edit/category-add-edit.component';

const routes: Routes = [
  { path : "login",         title : "Login-Live price india"  ,          component : LoginComponent },
  { path : "",              title : "Dashboard-Live price india"  ,      component : DashboardComponent },
  { path : "dashboard",     title : "Dashboard-Live price india" ,       component : DashboardComponent },
  { path : "productList",   title : "Product-List-Live price india" ,    component : ProductListComponent },
  { path : "product",       title : "Product-Live price india"  ,        component : ProductAddEditComponent },
  { path : "categoryList",  title : "Category-List-Live price india"  ,  component : CategoryListComponent },
  { path : "category",      title : "Category-Live price india"  ,       component : CategoryAddEditComponent },
  
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
