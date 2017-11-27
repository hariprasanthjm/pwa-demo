import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../shared/services/user.services';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  displayRegisterScreen = true;
  displayCustomerRegistration = false;
  displayTransporterRegistration = false;

  constructor(private router: Router,
    private userService: UserService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const fullname = '';
    const emailId = '';
    const mobile_number = '';
    const user_role = '';
    const password = '';

    this.signUpForm = this.fb.group({
      'fullname': [fullname, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [emailId, Validators.compose([Validators.required, Validators.email])],
      'mobile_number': [mobile_number, Validators.compose([Validators.required, Validators.minLength(10),
      Validators.maxLength(10), Validators.pattern('[0-9]{10}')])],
      'password': [password, Validators.required],
      'user_role': [user_role, Validators.required]
    }
    );
  }

  onFormSubmit(values) {
    console.log(values);
    this.userService.create(values)
      .subscribe(
      data => {
        this.router.navigate(['/auth/login']);
        alert('Successfully Created');
      },
      error => {
        console.log('Error Inside Signup Component', error);
      });
  }

  chooseRole(role) {
    if (role === 'customer') {
      this.displayRegisterScreen = false;
      this.displayTransporterRegistration = false;
      this.displayCustomerRegistration = true;
    } else {
      this.displayRegisterScreen = false;
      this.displayCustomerRegistration = false;
      this.displayTransporterRegistration = true;
    }
  }
  submitReg(value, type) {
    let user;
    if (type === 'customer') {
      user = this.createUserData(value.customer_name, value.customer_address, value.customer_email,
      value.customer_mobile_no, value.customer_password, 1);
    }else {
      user = this.createUserData(value.transporter_name, value.transporter_address, value.transporter_email,
         value.transporter_mobile_no, value.transporter_password, 2);
    }
    this.onFormSubmit(user);
    console.log(value);
    this.closeEvent('');
  }

  createUserData( _name, _address, _email, _mobile_no, _password, _userrole ) {
    return {
      'fullname' : _name,
      'address': _address,
      'email': _email,
      'mobile_number': _mobile_no,
      'password': _password,
      'user_role': _userrole
    };
  }

  closeEvent(event) {
    this.displayCustomerRegistration = false;
    this.displayTransporterRegistration = false;
    this.displayRegisterScreen = true;
  }

}
