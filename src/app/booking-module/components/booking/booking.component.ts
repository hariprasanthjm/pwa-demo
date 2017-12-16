import { Component, OnInit } from '@angular/core';
import { StoredBookingDatas } from '../../../shared/models/booking';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  addNewBooking = false;
  masterBookingData = StoredBookingDatas;
  filteredBookingData = [];
  pastBooking = false;
  activeBooking =  false;
  savedBooking = false;
  constructor() { }

  ngOnInit() {
    this.selectBooking('active');
  }

  selectBooking(type): void {
    if (type === 'active') {
      this.typeSelector(true, false, false);
    } else if (type === 'completed') {
      this.typeSelector(false, true, false);
    } else {
      this.typeSelector(false, false, true);
    }
    this.filteredBookingData = this.masterBookingData.filter(x => x.booking_status === type );
  }

  typeSelector(a, b, c) {
    this.activeBooking = a;
    this.pastBooking =  b;
    this.savedBooking = c;
  }

  receivedEvt(evt) {
    this.masterBookingData.push(evt);
    this.addNewBooking = false;
    this.selectBooking(evt.booking_status);
  }

}
