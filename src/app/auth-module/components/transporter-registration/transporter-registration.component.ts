import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transporter-registration',
  templateUrl: './transporter-registration.component.html',
  styleUrls: ['./transporter-registration.component.scss']
})
export class TransporterRegistrationComponent implements OnInit {
  createTransporter: any = {};
  @Output() closeTransporterReg: EventEmitter<any> = new EventEmitter();
  @Output() submitTransporterReg: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createForm() {
    this.createTransporter = {
      'transporter_name': '',
      'transporter_address': '',
      'transporter_email': '',
      'transporter_mobile_no': '',
      'transporter_password': ''
    };
  }

  closeEvt() {
    this.closeTransporterReg.emit(true);
  }

  onSubmit(addNew: NgForm) {
    console.log(addNew.valid);
    this.submitTransporterReg.emit(addNew.value);
  }

}
