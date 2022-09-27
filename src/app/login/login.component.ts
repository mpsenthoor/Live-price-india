import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { ApiServicesService } from '../Services/api-services.service';
import { first, map } from 'rxjs/operators';
import { LoginServicesService } from './login-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData = {
    username: "",
    password: "",
  }
  data: any;
  status: any;
  message: any;
  submit = false;
  errorMsg = "";


  constructor(private http: HttpClient,
    private ApiServicesService: ApiServicesService,
    private router: Router,
    private login: LoginServicesService
  ) {

  }

  ngOnInit(): void {
    this.login.canAccessLogin();
  }

  onSubmit(f: NgForm) {
    if (this.formData) {
      var formData = new FormData();
      formData.append("action", "login");
      formData.append("username", this.formData.username);
      formData.append("password", this.formData.password);


      this.ApiServicesService.getLoginData(formData).subscribe(
        (res: any) => {
          // console.log('getLoginData - ' + JSON.stringify(res));

          if (res && res.status == 'success') {              
            // alert("successfully logged in")
            this.router.navigate(['/dashboard'])                
            // this.login.setAdminLogin(res);
            localStorage.setItem("admin",JSON.stringify (this.formData.username))

          }
          else {

            this.errorMsg = res.message;                       
            console.log(this.errorMsg)
            f.reset();                                        
          }

        })
    }
  }
}