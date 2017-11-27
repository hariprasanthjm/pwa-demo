import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  createCustomer: any = {};
  @Output() closeCustomerReg: EventEmitter<any> = new EventEmitter();
  @Output() submitCustomerReg: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.createCustomer = {
      'customer_name': '',
      'customer_address': '',
      'customer_email': '',
      'customer_mobile_no': '',
      'customer_password': ''
    };
  }

  closeEvt() {
    this.closeCustomerReg.emit(true);
  }

  onSubmit(addNew: NgForm) {
    console.log(addNew.valid);
    this.submitCustomerReg.emit(addNew.value);
  }
  onReset(addNew: NgForm) {
    addNew.form.reset();
  }

}
