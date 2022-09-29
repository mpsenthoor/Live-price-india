import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://geserve-pc-3/livepriceindia/main.php"

  //  loginUrl="http://geserve-pc-3/livepriceindia/main/login.php"

  jsonUrl = "http://localhost:3000/category"


  //    Category Post Api    //

 addCategoryToApi(data:FormData){
 return this.http.post(this.baseUrl, data)
 }





  //    Login post  Api    //

  getLoginData(data: any) {
    return this.http.post(this.baseUrl, data)
  }


  //  Product Post Api  //


  addProductToApi(data:FormData){
    return this.http.post(this.baseUrl, data)
  }

  

  //  Product list Api //

  getProductList(data:any){
    return this.http.post(this.baseUrl,data)
  }

  addProductPriceToApi(data:FormData){
    return this.http.post(this.baseUrl,data)
  }





 //  State Post Api  //




 addStateToApi(data:FormData){
  
  return this.http.post(this.baseUrl, data)
}

 //  State list Api //

 getStateList(data:any){
  return this.http.post(this.baseUrl,data)
}



}

    


