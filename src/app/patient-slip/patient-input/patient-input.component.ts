import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-input',
  templateUrl: './patient-input.component.html',
  styleUrls: ['./patient-input.component.css'],
  styles:['input.ng-valid{border-right:4px solid green;} input.ng-invalid{border-right:4px solid red;}']
})
export class PatientInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onclick(value :any){
// console.log(value);
    
    

  }

}
