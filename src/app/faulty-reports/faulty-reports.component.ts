import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardserviceService } from '../Services/dashboardservice.service';
import { SignUpServiceService } from '../Services/sign-up-service.service';
import { MessageService } from 'primeng/api';
import { faultyreports } from './faultyreports';

@Component({
  selector: 'app-faulty-reports',
  templateUrl: './faulty-reports.component.html',
  styleUrls: ['./faulty-reports.component.css']
})
export class FaultyReportsComponent implements OnInit {
  cols: any[];
  faultyTransactions: any[];
  faultyreportsobj: faultyreports = new faultyreports();
  dateToday = new Date();
  showdate: string;
  dateFrom: Date;
  dateTill: Date;
  role: string;
  sum: number;
  users: any[];

  constructor(
    private router: Router,
    private service: DashboardserviceService,
    private suservice: SignUpServiceService,
    private messageservice: MessageService
  ) {}

  ngOnInit() {
    this.saveddate();
    this.getusers();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'transactionDate', header: 'Transaction Date' },
      { field: 'receivedAmount', header: 'Received Amount' },
      { field: 'totalAmount', header: 'Total Amount' },
      { field: 'transactionType', header: 'Transaction Type' },
      { field: 'description', header: 'Description' },
      { field: 'currency', header: 'Currency' },
      { field: 'operationType', header: 'Operation Type' },
      { field: 'dues', header: 'Dues' }
    ];
  }

  backtoAllReports() {
    this.router.navigate(['allreports']);
  }

  saveddate() {
    this.showdate =
      this.dateToday.getDate() +
      '-' +
      (this.dateToday.getMonth() + 1) +
      '-' +
      this.dateToday.getFullYear();
    let dateFrom = this.convertDate(this.dateToday);
    let dateTill = this.convertDate(this.dateToday);

    this.faultyreportsobj.from = dateFrom;
    this.faultyreportsobj.till = dateTill;

    this.service.postFaultyReports(this.faultyreportsobj).subscribe(
      data => {
        this.faultyTransactions = [];
        this.sum = 0;
        data.map(value => {
          console.log(value);
          this.faultyTransactions.push({
            id: value.id,
            transactionDate: new Date(value.transactionDate).toDateString(),
            receivedAmount: value.receivedAmount,
            createdBy: value.createdBy,
            totalAmount: value.totalAmount,
            transactionType: value.transactionType,
            description: value.description,
            currency: value.currency,
            operationType: value.operationType,
            dues: value.dues
          });
        });
      },
      error => {
        console.log('error agya yar');
        this.messageservice.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }

  getusers() {
    this.users = [];
    this.suservice.getAllUsers().subscribe(
      data => {
        //console.log('--==============================', data);
        this.users = [{ label: 'All', value: null }];
        data.map(value => {
          console.log(value);
          this.users.push({
            label: value.name,
            value: value.name
          });
          this.faultyreportsobj.role = value.name;
        });
      },
      error => {
        console.log('error agya yar');
        this.messageservice.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }

  onfilter() {
    let date1, date2, role1;
    // let checkdate1 = this.dateFrom,
    //   checkdate2 = this.dateTill,
    let checkRole = this.role;
    if (this.dateFrom == undefined) {
      this.faultyreportsobj.from = this.convertDate(this.dateToday);
      this.dateFrom = this.dateToday;
    }
    if (this.dateTill == undefined) {
      this.faultyreportsobj.till = this.convertDate(this.dateToday);
      this.dateTill = this.dateToday;
    }
    if (checkRole == undefined || checkRole == 'None') {
      this.faultyreportsobj.role = null;
      date1 = this.convertDate(this.dateFrom);
      date2 = this.convertDate(this.dateTill);
      role1 = this.role;
      this.faultyreportsobj.from = date1;
      this.faultyreportsobj.till = date2;
      this.faultyreportsobj.role = role1;
    } else {
      date1 = this.convertDate(this.dateFrom);
      date2 = this.convertDate(this.dateTill);
      role1 = this.role;
      this.faultyreportsobj.from = date1;
      this.faultyreportsobj.till = date2;
      this.faultyreportsobj.role = role1;
    }
    console.log(date1, date2, role1);

    this.service.postFaultyReports(this.faultyreportsobj).subscribe(
      data => {
        console.log('=======>', data);
        this.faultyTransactions = [];
        data.map(value => {
          console.log(value);
          this.faultyTransactions.push({
            id: value.id,
            transactionDate: new Date(value.transactionDate).toDateString(),
            createdBy: value.createdBy,
            receivedAmount: value.receivedAmount,
            totalAmount: value.totalAmount,
            transactionType: value.transactionType,
            description: value.description,
            currency: value.currency,
            operationType: value.operationType,
            dues: value.dues
          });
        });
      },
      error => {
        console.log('error agya yar');
        this.messageservice.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Employee Cashflow Report</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
          </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`);
    popupWin.document.close();
  }

  convertDate(date: Date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }
}
