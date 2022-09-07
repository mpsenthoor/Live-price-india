import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/login/login-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router : Router,
    private loginService : LoginServicesService
  ) { }

  ngOnInit(): void {
this.loginService.canAccess();
  }

onLogout(){
  this.loginService.logout();

}

}
