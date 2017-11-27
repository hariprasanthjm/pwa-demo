import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { TransporterRegistrationComponent } from './components/transporter-registration/transporter-registration.component';
// Plugins
import { CustomMaterialModule} from '../shared/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthRoutes as routes } from './auth.routes';

// Mock Backend
import { fakeBackendProvider } from '../shared/helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
// import { SharedModule } from '../shared/index';

import {AuthenticationService } from '../shared/services/authentication.service';
import { UserService } from '../shared/services/user.services';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FlexLayoutModule
    // SharedModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    CustomerRegistrationComponent,
    TransporterRegistrationComponent
  ],
  providers: [
     AuthenticationService,
     UserService,
     // providers used to create fake backend
     fakeBackendProvider,
     MockBackend,
     BaseRequestOptions
  ]
})
export class AuthModule { }
