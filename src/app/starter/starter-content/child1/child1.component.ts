import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-child1-content',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.less']
})
export class Child1 implements OnInit {

  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
