import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HomeComponent implements OnInit {
  menuState = 'out';
  showLoader = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

}
