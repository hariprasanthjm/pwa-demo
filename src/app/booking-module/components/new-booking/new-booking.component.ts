import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, Validators, FormGroup, FormBuilder, } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Places, TnPlacesList } from '../../../shared/models/tn_places';
import { vehicleTypes, vehicleGoodsTypes } from '../../../shared/models/vehicles';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss'],
  providers: [DatePipe]
})
export class NewBookingComponent implements OnInit {

  @Output() closeBooking: EventEmitter<any> = new EventEmitter();
  @Output() submitBooking: EventEmitter<any> = new EventEmitter();

  pickupLocation: FormControl = new FormControl('', Validators.required);
  dropLocation: FormControl = new FormControl('', Validators.required);
  new_bookings: any = {};
  filteredCitiesPickup: Observable<string[]>;
  filteredCitiesDrop: Observable<string[]>;
  placesData: any = [];
  vehicleFeeds: any = vehicleTypes;
  vehicleGoods: any = vehicleGoodsTypes;
  minDate = new Date();

  constructor(private fb: FormBuilder,
              private datePipe: DatePipe,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.placesData = TnPlacesList;
    this.filteredCitiesPickup = this.pickupLocation.valueChanges
      .startWith('')
      .map(val => this.customFilter(val));
    this.filteredCitiesDrop = this.dropLocation.valueChanges
      .startWith('')
      .map(val => this.customFilter(val));
      this.initialForm();
  }

  customFilter(val: string): string[] {
    return this.placesData.filter(option =>
      option.place_name.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'dd-MM-yyyy');
  }

  onSubmit(picLoc, dpLoc, pcCont, dpCont, date, trans, gps, type, size, ton, goods): void {
    const newBookins = {
      'booking_status': 'active',
      'pickup_location_details': picLoc,
      'drop_location_details': dpLoc,
      'pickup_location_contact': pcCont,
      'drop_location_contact': dpCont,
      'transit_insurance': trans,
      'gps_tracking': gps,
      'scheduled_date': this.transformDate(date),
      'vehicle_type': type,
      'vehicle_size': size,
      'vehicle_tonnage': ton,
      'vehicle_goods': goods,
      'delivery_status': 'Yet to start',
      'booking_id': Math.random().toString(36).slice(2)
    };
    this.snackBar.open('New Booking created Successfully', 'Close', {
      duration: 2500,
      verticalPosition: 'top'
    });
    this.submitBooking.emit(newBookins);
  }
  saveLater(picLoc, dpLoc, pcCont, dpCont, date, trans, gps, type, size, ton, goods): void {
    const saveBooking = {
      'booking_status': 'saved',
      'pickup_location_details': picLoc,
      'drop_location_details': dpLoc,
      'pickup_location_contact': pcCont,
      'drop_location_contact': dpCont,
      'transit_insurance': trans,
      'gps_tracking': gps,
      'scheduled_date': this.transformDate(date),
      'vehicle_type': type,
      'vehicle_size': size,
      'vehicle_tonnage': ton,
      'vehicle_goods': goods,
      'delivery_status': 'Yet to start',
      'booking_id': 'n/a'
    };
    this.snackBar.open('Booking Saved for Later.', 'Close', {
      duration: 2500,
      verticalPosition: 'top'
    });
    this.submitBooking.emit(saveBooking);
  }
  switchValues(): void {
    const leftVal = this.pickupLocation.value;
    const rightVal = this.dropLocation.value;
    this.pickupLocation.patchValue(rightVal);
    this.dropLocation.patchValue(leftVal);
  }

  initialForm(): void {
    this.new_bookings = {
      'pickup_location_contact': '',
      'drop_location_contact': '',
      'transit_insurance': false,
      'gps_tracking': false,
      'scheduled_date': '',
      'vehicle_type': '',
      'vehicle_size': '',
      'vehicle_tonnage': '',
      'vehicle_goods': ''
    };
  }

  vehicleTypeChanged(val): void {
    const filteredFeed = this.vehicleFeeds.filter(x => x.name === val);
    if (filteredFeed) {
      this.new_bookings['vehicle_size'] = filteredFeed[0].size;
      this.new_bookings['vehicle_tonnage'] = filteredFeed[0].tonnage;
    } else {
      this.new_bookings['vehicle_size'] = '';
      this.new_bookings['vehicle_tonnage'] = '';
    }
  }

}
