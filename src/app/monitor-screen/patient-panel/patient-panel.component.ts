import { OpdconsultancyComponent } from "./../../opdconsultancy/opdconsultancy.component";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-panel',
  templateUrl: './patient-panel.component.html',
  styleUrls: ['./patient-panel.component.css']
})
export class PatientPanelComponent implements OnInit {

  constructor(private _router:Router,private activateRoute : ActivatedRoute) { }

  ngOnInit() {
  }
  goToOPD(){
    let id =this.activateRoute.snapshot.params['id'];
    this._router.navigate(['/opdconsultancy/'+id])
  }
}
