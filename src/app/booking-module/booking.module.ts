import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookingComponent } from '../booking-module/components/booking/booking.component';
import { BookingRoutes as routes } from './booking.routes';

import {CustomMaterialModule} from '../shared/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewBookingComponent } from './components/new-booking/new-booking.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [BookingComponent, NewBookingComponent]
})
export class BookingModule { }
