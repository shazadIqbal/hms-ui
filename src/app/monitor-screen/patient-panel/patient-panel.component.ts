import { OpdconsultancyComponent } from "./../../opdconsultancy/opdconsultancy.component";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient-panel',
  templateUrl: './patient-panel.component.html',
  styleUrls: ['./patient-panel.component.css']
})
export class PatientPanelComponent implements OnInit {


  constructor(private router: Router, private activatedRout: ActivatedRoute) { }

  ngOnInit() {
  }
  opdEr() {
  }
  gotoEr() {
    let id = this.activatedRout.snapshot.params['id'];
    this.router.navigate(['/opdEmergency/' + id]);

  }
  goToOPD() {
    let id = this.activatedRout.snapshot.params['id'];
    this.router.navigate(['/opdconsultancy/' + id])
  }

gotoGyny(){
  let id = this.activatedRout.snapshot.params['id'];
  this.router.navigate(['/opdGyny/' + id]); 
}

  gotoHistory()
  {
    let id = this.activatedRout.snapshot.params['id'];
    this.router.navigate(['/history/' + id])
  }



  goTolab(){
    let id = this.activatedRout.snapshot.params['id'];
    this.router.navigate(['opdlabtest/'+id])
  }
  goToPatientTransactions(){
    let id = this.activatedRout.snapshot.params['id'];
    this.router.navigate(['patienttransactions/'+id])
    


  }

  gotoAdmit(){
    let id = this.activatedRout.snapshot.params['id'];
    this.router.navigate(['/patientadmit/' + id])
  }

}
