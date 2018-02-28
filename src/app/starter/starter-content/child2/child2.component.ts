import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-child2-content',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.less']
})
export class Child2 implements OnInit {

  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
