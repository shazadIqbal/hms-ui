import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

@Output() hide = new EventEmitter();
navbarHide:any = true;
  constructor() { }

  ngOnInit() {
   this.hide.emit(this.navbarHide);
  }

}
