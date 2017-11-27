import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { vehicleDatas } from '../../../shared/models/vehicles';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  public showAddVehicle = false;
  public myvehiclesList = [];
  public width;

  constructor( ngZone: NgZone ) {
    window.onresize = (e) => {
        ngZone.run(() => {
            this.width = window.innerWidth;
            // console.log(this.width, 'width');
        });
    };
   }

  ngOnInit() {
    this.myvehiclesList = vehicleDatas;
  }
  detectCloseChanges(evt) {
    if (evt) {
      this.showAddVehicle = false;
    }
  }
  createNewVehicle() {
    this.showAddVehicle = true;
  }
  detectTabChanges(evt) {
    console.log(evt);
  }

}
