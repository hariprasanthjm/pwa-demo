import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { expenseDatas } from '../../../shared/models/expense';
import { expenseDatas1 } from '../../../shared/models/expense';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  public showAddVehicle1 = false;
  public myvehiclesList = [];
  public myvehiclesList1 = [];
  public width;

  /* constructor( ngZone: NgZone ) {
    window.onresize = (e) => {
        ngZone.run(() => {
            this.width = window.innerWidth;
            // console.log(this.width, 'width');
        });
    };
   } */
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.myvehiclesList = expenseDatas;
    this.myvehiclesList1 = expenseDatas1;
    this.loader();
  }
  detectCloseChanges1(evt) {
    if (evt) {
      this.showAddVehicle1 = false;
    }
  }
  createNewVehicle1() {
    this.showAddVehicle1 = true;
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
