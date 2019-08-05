import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashflow-of-hospital',
  templateUrl: './cashflow-of-hospital.component.html',
  styleUrls: ['./cashflow-of-hospital.component.css']
})
export class CashflowOfHospitalComponent implements OnInit {
  date=new Date();
  showdate:any
  constructor( private router:Router) { }

  ngOnInit() {
    this.showdate=this.date.getDate()+"-"+(this.date.getMonth()+1) +"-"+this.date.getFullYear();
  }
  allreports() {
    this.router.navigate(['allreports']);
  }

}
