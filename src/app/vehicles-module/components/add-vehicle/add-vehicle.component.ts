import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  addVehicle: any = {};
  @Output() closeAddVehicle: EventEmitter<any> = new EventEmitter();

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addVehicle = {
      'registration_number': '',
      'engine_number': '',
      'engine_chasis_number': '',
      'vehicle_model': '',
      'vehicle_year': '',
      'vehicle_tonnage': '',
      'fc_expiry_date': '',
      'insurance_expiry_date': '',
      'vehicle_docs': true,
    };
  }

  closeVehicleScreen() {
    this.closeAddVehicle.emit(true);
  }

  onSubmit(addNew: NgForm) {
    console.log(addNew.value);  // { first: '', last: '' }
    console.log(addNew.valid);
    this.snackBar.open('New Vehicle Added Successfully', 'Ok', {
      duration: 2500,
      verticalPosition: 'top'
    });
    this.closeAddVehicle.emit(true);
    // addNew.form.reset();
  }
  onReset(addNew: NgForm) {
    addNew.form.reset();
  }
}
