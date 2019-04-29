import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-panel',
  templateUrl: './patient-panel.component.html',
  styleUrls: ['./patient-panel.component.css']
})
export class PatientPanelComponent implements OnInit {

  constructor(private router: Router,private activatedRout: ActivatedRoute) { }

  ngOnInit() {
  }
  opdEr(){
  }
  gotoEr(){
    let id = this.activatedRout.snapshot.params['id'];
    this.router.navigate(['/opdEmergency/'+ id]);
  }
}
