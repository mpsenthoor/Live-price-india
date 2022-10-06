import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/Services/api-services.service';


export interface state {
  StateName: string;
  StateId: number;
}

@Component({
  selector: 'app-city-add-edit',
  templateUrl: './city-add-edit.component.html',
  styleUrls: ['./city-add-edit.component.css']
})
export class CityAddEditComponent implements OnInit {

  cityForm:FormGroup

  states: state[] = []

  constructor(

    private fb : FormBuilder,
    private apiService :  ApiServicesService,
private router : Router

  ) {
    this.cityForm=this.fb.group({
      StateName : ['',Validators.required],
      cityName  : ['',Validators.required],
    })
   }

   formType:any
   editCityId:any

  ngOnInit(): void {
    this.getStateName()
    this.formType=history.state.action;
    if (history.state.action== 'editCity') {
      this.editCityData(history.state.id);
      this.editCityId=history.state.id
    }
  }

  editCityData(id:any){
    var formData= new FormData();
    formData.append("action","singleCityList")
    formData.append("cityId",id)
    this.apiService.addCityToApi(formData).subscribe(
      (res:any)=>{
        console.log(res)
        this.cityForm.setValue({
          StateName: res.StateId,
          cityName : res.cityName
        })
      }
    )

  }


  getStateName(){
    var formData= new FormData();



    formData.append("action",'AllStateList')
    this.apiService.addStateToApi(formData).subscribe(
      (res:any)=>{
// console.log(res)

this.states=res
console.log(this.states)
      }
    )
  }

  addCity(){
   console.log(this.cityForm.value) ;
   var formData= new FormData ();

   
if (this.formType == 'editCity') {
  formData.append('action', 'updateCity');
  formData.append('cityId', this.editCityId);
}
else{
   formData.append("action","addCity")}
   formData.append("StateName",this.cityForm.controls['StateName'].value)
   formData.append("cityName",this.cityForm.controls['cityName'].value)

   this.apiService.addCityToApi(formData).subscribe(
    (res:any)=>{
console.log(res)
this.router.navigate(['cityList'])
    }
    
   )
   return formData;
  }



  backToList() {
    this.router.navigate(['cityList'])
  }

}
