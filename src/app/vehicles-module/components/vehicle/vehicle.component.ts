import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { vehicleDatas } from '../../../shared/models/vehicles';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  public showAddVehicle = false;
  public myvehiclesList = [];
  public width;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.myvehiclesList = vehicleDatas;
    this.loader();
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
  loader() {
    this.loaderService.display(true);
    setTimeout(() => {
      this.loaderService.display(false);
    }, 1500);
  }

}
