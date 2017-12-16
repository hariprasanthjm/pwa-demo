// import { Component, OnInit, NgZone, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit} from '@angular/core';
// import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  showLoader: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
