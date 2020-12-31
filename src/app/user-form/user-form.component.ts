import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  isDisableCell:boolean;
  isDisableEmail: boolean;
  isHiddenEmail:boolean;
  isHiddenCell: boolean;
  liveIn=[
    {id: 1 , district: "Dhaka"},
    {id: 2 , district: "Dhaka District"},
    {id: 3 , district: "Sylhet"},
    {id: 4 , district: "Barishal"},
    {id: 5 , district: "Khulna"}
  ];
  contacts =[
    {id:1 , type:"Cell"},
    {id:2 , type:"Email"}
  ];
  constructor (){
    this.isDisableCell =true;
    this.isDisableEmail=true;
    this.isHiddenCell=true ;
    this.isHiddenEmail=true;
  }
  log(x)
  {
    //console.log(x);
  }

  submit (form : any)
  {
    console.log(form);
    console.log(form.value);
  }
  contactMethod(values:number)
  {
    console.log(values);
    let temp = 0;
    if(values == 1)
    {
      this.isDisableEmail=true;
      this.isDisableCell=false;
      this.isHiddenEmail=true;
      this.isHiddenCell=false;
      
    }
    else{
      this.isDisableCell=true;
      this.isDisableEmail=false;
      this.isHiddenEmail=false;
      this.isHiddenCell=true;
    }
   
  }
  addNew()
  {
    alert('This is working');
  }

}
