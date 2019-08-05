import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeecashflow',
  templateUrl: './employeecashflow.component.html',
  styleUrls: ['./employeecashflow.component.css']
})
export class EmployeecashflowComponent implements OnInit {
  date = new Date();
  showdate: string;
  constructor(private router: Router) {}

  ngOnInit() {
    //this.returnDateinString();
    this.saveddate();
  }

  saveddate() {
    this.showdate =
      this.date.getDate() +
      '-' +
      parseInt(this.date.getMonth() + 1) +
      '-' +
      this.date.getFullYear();
  }

  backtoAllReports() {
    this.router.navigate(['allreports']);
  }

  returnDateinString(date: Date) {
    let date1 = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return date1;
  }
}
