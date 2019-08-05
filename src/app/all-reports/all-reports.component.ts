import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.css']
})
export class AllReportsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backTodashboard() {
    this.router.navigate(['dashboard']);
  }
routetocashflowofdoctor(){
  this.router.navigate(['cashflowofdoctor']);
}
routetocashflowofhospital(){

  this.router.navigate(['cashflowofhospital']);
}
}
