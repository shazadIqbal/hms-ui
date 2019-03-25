import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cal',
  templateUrl: './my-cal.component.html',
  styleUrls: ['./my-cal.component.css']
})
export class MyCalComponent implements OnInit {
   heading="Tour Of Heroes";
   p="windstrom";
   mobiles=['samsung','apple','oppo','hwavei'];

  constructor() { }

  ngOnInit() {
  }


}
