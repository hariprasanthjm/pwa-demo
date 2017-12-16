import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// adding plugins
import { HomeComponent } from './shared/components/home/home.component';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { PremiereHeaderComponent } from './shared/components/premiere-header/premiere-header.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { CustomMaterialModule } from './shared/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderService } from './shared/services/loader.service';

// Mock Backend
import { fakeBackendProvider } from './shared/helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthenticationService } from './shared/services/authentication.service';
import { UserService } from './shared/services/user.services';

// Routes
import { routes } from './app.routes';
import { SecureAuthGuard } from './shared/guards/secure-auth.guard';

// adding rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PremiereHeaderComponent,
    HomeComponent,
    NotificationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [
    LoaderService,
    SecureAuthGuard,
    AuthenticationService,
    UserService,
     // providers used to create fake backend
     fakeBackendProvider,
     MockBackend,
     BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
