import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';

import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  returnUrl: string;
  signinLoader = false;
  hidePassword;

  mobile_number = new FormControl('', [
    Validators.required
  ]);

  password = new FormControl('', [Validators.required]);


  loginForm: FormGroup = this.builder.group({
    mobile_number: this.mobile_number,
    password: this.password
  });

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private snackBar: MatSnackBar
            ) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/vehicles';
  }

  login () {
    const mob_no = parseInt(this.loginForm.value.mobile_number, 10);
    const pwd = this.loginForm.value.password;
    console.log(mob_no, typeof mob_no);
    this.signinLoader = true;
    this.authenticationService.login(mob_no, pwd).subscribe(
        data => {
          setTimeout(() => {
            this.router.navigate([this.returnUrl]);
            this.signinLoader = false;
          }, 2000);
        },
        error => {
          console.log('Error in Login', error.message);
          this.snackBar.open(error.message, 'Close', {
            duration: 2500,
          });
          this.signinLoader = false;
        });
  }
}
