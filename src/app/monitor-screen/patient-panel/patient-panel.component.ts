import { OpdconsultancyComponent } from "./../../opdconsultancy/opdconsultancy.component";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-panel',
  templateUrl: './patient-panel.component.html',
  styleUrls: ['./patient-panel.component.css']
})
export class PatientPanelComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  goToOPD(){
    this._router.navigate(['/opdconsultancy'])
  }
}
