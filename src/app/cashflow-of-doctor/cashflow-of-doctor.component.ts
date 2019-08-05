import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashflow-of-doctor',
  templateUrl: './cashflow-of-doctor.component.html',
  styleUrls: ['./cashflow-of-doctor.component.css']
})
export class CashflowOfDoctorComponent implements OnInit {
date=new Date();
cols: any[];
  showdate:any
  constructor( private router:Router) { }

  ngOnInit() {
    this.showdate=this.date.getDate()+"-"+(this.date.getMonth()+1) +"-"+this.date.getFullYear();
    this.cols = [
      { field: 'id', header: 'ID' },
      {field: 'panelName', header: 'Doctor Name' },
      {field: 'panelType', header: ' Consultancy' },
      {field: 'panelStartDate', header: 'Lab' },
      {field: 'panelEndDate', header: 'Gyny' },
      {field: 'panelFacility', header: 'Emergency' },
      {field: 'panelFacility', header: 'Observation' },
      {field: 'panelFacility', header: 'Bed' }
    ];
  }

  allreports() {
    this.router.navigate(['allreports']);
  }

}
