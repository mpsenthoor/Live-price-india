import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes  } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Managements/dashboard/dashboard.component';
import { ProductListComponent } from './Managements/product-list/product-list.component';
import { ProductAddEditComponent } from './Managements/product-add-edit/product-add-edit.component';
import { CategoryListComponent } from './Managements/category-list/category-list.component';
import { CategoryAddEditComponent } from './Managements/category-add-edit/category-add-edit.component';
import { StateAddEditComponent } from './Managements/state-add-edit/state-add-edit.component';
import { StateListComponent } from './Managements/state-list/state-list.component';
import { CityAddEditComponent } from './city-add-edit/city-add-edit.component';
import { CityListComponent } from './city-list/city-list.component';

const routes: Routes = [
  { path : "login",         title : "Login-Live price india"  ,          component : LoginComponent },
  { path : "",              title : "Dashboard-Live price india"  ,      component : DashboardComponent },
  { path : "dashboard",     title : "Dashboard-Live price india" ,       component : DashboardComponent },
  { path : "productList",   title : "Product-List-Live price india" ,    component : ProductListComponent },
  { path : "product",       title : "Product-Live price india"  ,        component : ProductAddEditComponent },
  { path : "categoryList",  title : "Category-List-Live price india"  ,  component : CategoryListComponent },
  { path : "category",      title : "Category-Live price india"  ,       component : CategoryAddEditComponent },
  { path : "state",         title : "State-Live price india"  ,          component : StateAddEditComponent },
  { path : "stateList",     title : "State-Live price india"  ,          component : StateListComponent },
  { path : "city",          title : "City-Live price india"  ,           component : CityAddEditComponent },
  { path : "cityList",      title : "City-Live price india"  ,           component : CityListComponent },
  
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
