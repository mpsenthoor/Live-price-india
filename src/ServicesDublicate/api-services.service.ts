import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  
  constructor( private http :HttpClient) { }

   baseUrl="http://geserve-pc-3/livepriceindia/main.php"

  //  loginUrl="http://geserve-pc-3/livepriceindia/main/login.php"

  jsonUrl="http://localhost:3000/loginData"

// getUrl(url : any){
//   return this.baseUrl+url+'/';
// }



// getLoginUrl(){
//   return this.getUrl("login.php")
// }


// connectToLoginApi(data:FormData){
//   return this.http.post(this.getLoginUrl(),data);
// }
getLoginData(data:any){
  return this.http.post(this.baseUrl, data)
}




}
