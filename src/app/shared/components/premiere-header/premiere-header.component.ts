import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-premiere-header',
  templateUrl: './premiere-header.component.html',
  styleUrls: ['./premiere-header.component.scss']
})
export class PremiereHeaderComponent implements OnInit {
  userName: string;
  @Output() notificationClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    const userDetails = JSON.parse(localStorage.getItem('currentUser'));
    this.userName = userDetails['fullname'];
  }

}
