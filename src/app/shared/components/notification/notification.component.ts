import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  messages = [];
  constructor() { }

  ngOnInit() {
    this.messages = [{
      'short_desc': 'Logy dd56uc87ext',
      'subject': 'Delivered Succesfully',
      'content': 'Your Shipment has beeb successfully delivered',
      'icon': 'beenhere'
    },
    {
      'short_desc': 'Logy tpe8p2sr0lo',
      'subject': 'Payment Required',
      'content': 'You need to pay around Rs.2500 in order to continue your shipment',
      'icon': 'error_outline'
    },
    {
      'short_desc': 'Logy g5fut5xpmhj',
      'subject': 'Shipment Reached Madurai',
      'content': 'Shipment reached Madurai Junction',
      'icon': 'assistant_photo'
    },
    ];
  }

}
