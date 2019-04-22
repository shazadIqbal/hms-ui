import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-panel',
  templateUrl: './patient-panel.component.html',
  styleUrls: ['./patient-panel.component.css']
})
export class PatientPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  opdEr(){
    this.router.navigate(['/opdEmergency']);
  }
}
