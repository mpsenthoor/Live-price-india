import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(
    private router : Router
  ) { }

  setAdminLogin(formData:any) {
    console.log("work");
    localStorage.setItem("username",formData.username);
  }

  logout() {
    console.log("logout");
    localStorage.removeItem('admin');
    this.router.navigate(["login"])
  }

canAccess(){
  if(localStorage.getItem('admin')== null){
    this.router.navigate(['login'])
  }
}


canAccessLogin(){
  if(localStorage.getItem('admin')!== null){
    this.router.navigate(['dashboard'])
  }
}

}
