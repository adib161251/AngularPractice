import { SignupFormValidator } from './../user-form/user.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { PassFormValidator } from './changepass.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form3= new FormGroup({
    currentPass: new FormControl(),
    newPass: new FormControl(),
    confirmPass: new FormControl()
  });
}
