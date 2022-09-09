import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Managements/category-list/category-list.component';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://geserve-pc-3/livepriceindia/main.php"

  //  loginUrl="http://geserve-pc-3/livepriceindia/main/login.php"

  jsonUrl = "http://localhost:3000/category"


  //    Category Post Api    //

  addToCategoryApi(category: FormData) {
    return this.http.post<Category>(this.jsonUrl, category)
  }


  //    Login post  Api    //

  getLoginData(data: any) {
    return this.http.post(this.baseUrl, data)
  }





}





// getUrl(url : any){
//   return this.baseUrl+url+'/';
// }



// getLoginUrl(){
//   return this.getUrl("login.php")
// }


// connectToLoginApi(data:FormData){
//   return this.http.post(this.getLoginUrl(),data);
// }