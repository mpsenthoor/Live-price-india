import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/Notification/notifications.service';
import { ApiServicesService } from 'src/app/Services/api-services.service';

@Component({
  selector: 'app-state-add-edit',
  templateUrl: './state-add-edit.component.html',
  styleUrls: ['./state-add-edit.component.css']
})
export class StateAddEditComponent implements OnInit {

  stateForm : FormGroup;


  constructor(private fb:FormBuilder,
    private apiService : ApiServicesService,
    private router : Router,
   
    ) {

      this.stateForm= this.fb.group({
        StateName : ["",Validators.required],
       }) 
     }


    //  StateName:any;
     formType:any;
     editStateId : any
     element:any;
     


  ngOnInit(): void {
   

    this.formType= history.state.action;
  if (history.state.action== 'editState') {
    this.editStateData(history.state.id);
    this.editStateId=(history.state.id)
  }
}


 editStateData(id:any){

  var formData= new FormData();
formData.append("action", "SingleStateList")
formData.append("StateId", id)

this.apiService.addCategoryToApi(formData).subscribe(
  (res:any)=>{
   
   
    this.stateForm.setValue({
      StateName: res.StateName,
       
    })
  }
)

 }


  addState(){
  var formData = new FormData();

  if(this.formType =='editState' ){
    formData.append("action","StateUpdate");
    formData.append("StateId",this.editStateId);
  }
  else

 {formData.append("action","StateAdd");}
formData.append("StateName", this.stateForm.controls['StateName'].value)

this.apiService.addStateToApi(formData).subscribe(
  (res:any)=>{
    console.log(res)
    this.router.navigate(['statelist'])
   
  }

  
)

return formData;

  
  }



  backToList(){
    this.router.navigate(['statelist'])
  }

}
