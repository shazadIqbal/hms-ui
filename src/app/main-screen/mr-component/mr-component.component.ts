import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mr-component',
  templateUrl: './mr-component.component.html',
  styleUrls: ['./mr-component.component.css']
})
export class MrComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  
}
