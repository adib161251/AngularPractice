import { SignupFormValidator } from './../user-form/user.validators';
import { Component, Output } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})


export class SignUpFormComponent{
  data=[];
  passwords=['123'];
  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      SignupFormValidator.cannotContainSpace
    ], SignupFormValidator.shouldbeUnique),
    pass: new FormControl('',Validators.required)
  });

  form2 = new FormGroup({
    input: new FormControl()
  });

  login()
  {
    let username = this.form.get('username').value;
    let password = this.form.get('pass').value;
    let poppass = this.passwords.pop();
    console.log(poppass);
    if(username == 'Arman' && password=== poppass)
    {
      confirm("login Successful");
    }
    else{
      this.form.setErrors({
        invalidlogin : true
      });
      return;
    }
    window.location.reload();
  }
  get pass(){
    return this.form.get('pass');
  }

  addData(value :string)
  {
    if(this.data.indexOf(value) === -1){
      this.data.push(value);
    }
    else{
      console.log("same Entry");
    }
  }

  removeData(value:string)
  {
    let index = this.data.indexOf(value);

    this.data.splice(index,1);
    console.log(index +" index data is deleted");
  }


}