import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardserviceService } from '../Services/dashboardservice.service';
import { MessageService } from 'primeng/api';
import { CashFlowHospital } from './cashFlowHospital'
import { CHECKBOX_REQUIRED_VALIDATOR } from '@angular/forms/src/directives/validators';
@Component({
  selector: 'app-cashflow-of-hospital',
  templateUrl: './cashflow-of-hospital.component.html',
  styleUrls: ['./cashflow-of-hospital.component.css']
})
export class CashflowOfHospitalComponent implements OnInit {
  date=new Date();
  showdate:any
  cashFlowType: any;
  dateToday=new Date();
  convertedDate:String;
  showLoading: any = true;
  cols: any[];
  dateFrom:Date;
  dateTill:Date;
  hospitalTransactions: any[]=[];
  cashFlowHospitalObj : CashFlowHospital = new CashFlowHospital();
  role: String;
  printer = true;
  sum = 0;



  constructor( private router:Router, private service:DashboardserviceService,  private messageservice:MessageService) { }

  ngOnInit() {
    console.log(this.dateToday.getFullYear())
    console.log("===============================> ",this.convertDate(this.dateToday));
    this.showdate=this.date.getDate()+"-"+(this.date.getMonth()+1) +"-"+this.date.getFullYear();

    this.saveDates();

    this.cashFlowType = [
      {label: 'None', value: null},
      { label: 'ER', value: 'ER' },
      { label: 'CONSULTANCY', value: 'CONSULTANCY' },
      { label: 'OBSERVATION', value: 'OBSERVATION' },
      { label: 'ADMIT', value: 'ADMIT' },
      { label: 'LABTEST', value: 'LABTEST'},
      { label: 'PACKAGE', value: 'PACKAGE'},
      { label: 'GYNY', value:'GYNY'}   
    ];
    this.cols = [
      { field: 'id', header: 'ID' },
      {field: 'transactionDate', header: 'Transaction Date' },
      {field: 'receivedAmount', header: ' Recieved Amount' },
      {field: 'totalAmount', header: 'Total Amount' },
      {field: 'transactionType', header: 'Transaction Type' },
      {field: 'description', header: 'Desccription' },
      {field: 'currency', header: 'Currency' },
      {field: 'operationType', header: 'Operation Type' },
      {field: 'dues', header: 'Dues' }

    ];

    
  }
  allreports() {
    this.router.navigate(['allreports']);
  }

  convertDate(date: Date){

    return this.convertedDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
  }

  saveDates(){

    let dateFrom = this.convertDate(this.dateToday);
    let dateTill = this.convertDate(this.dateToday);

    this.cashFlowHospitalObj.from = dateFrom;
    this.cashFlowHospitalObj.till = dateTill;

    this.service.postCashFlowOfHospital(this.cashFlowHospitalObj).subscribe(data=>{
      this.hospitalTransactions = [];
      data.map(value =>{
        this.hospitalTransactions.push({
          'id':value.id,
          'transactionDate':new Date(value.transactionDate).toDateString(),
          'receivedAmount':value.receivedAmount,
          'totalAmount':value.totalAmount,
          'transactionType':value.transactionType,
          'description':value.description,
          'currency':value.currency,
          'operationType':value.operationType,
          'dues':value.dues
        })
      })
      this.showLoading = false;
    });
  }

  onfilter(){
   
    let date1,date2,role1;
    let checkRole=this.role;
    if(this.dateFrom == undefined){
    this.cashFlowHospitalObj.from = this.convertDate(this.dateToday);
    this.dateFrom = this.dateToday;
    }
    if(this.dateTill == undefined){
      this.cashFlowHospitalObj.till = this.convertDate(this.dateToday);
      this.dateTill = this.dateToday;
    }
    if(checkRole == undefined || checkRole == 'None'){
      this.cashFlowHospitalObj.role = null;
      date1=this.convertDate(this.dateFrom);
      date2=this.convertDate(this.dateTill);
      role1=this.role;
      this.cashFlowHospitalObj.from = date1;
      this.cashFlowHospitalObj.till = date2;
      this.cashFlowHospitalObj.role = role1;


    }
    else{
      date1=this.convertDate(this.dateFrom);
      date2=this.convertDate(this.dateTill);
      role1=this.role;
      this.cashFlowHospitalObj.from = date1;
      this.cashFlowHospitalObj.till = date2;
      this.cashFlowHospitalObj.role = role1;
    }

    this.service.postCashFlowOfHospital(this.cashFlowHospitalObj).subscribe(data=>{
      this.sum  = 0;
      this.hospitalTransactions=[];
      data.map(value =>{
        this.hospitalTransactions.push({
          'id':value.id,
          'transactionDate':new Date(value.transactionDate).toDateString(),
          'receivedAmount':value.receivedAmount,
          'totalAmount':value.totalAmount,
          'transactionType':value.transactionType,
          'description':value.description,
          'currency':value.currency,
          'operationType':value.operationType,
          'dues':value.dues
        })
        this.sum = value.totalAmount  + this.sum ;
      })
      
      console.log("==========================>",this.sum)
    },
    error => {
      console.log(error);
      this.messageservice.add({
        severity: "error",
        summary: "Status",
        detail: "something went wrong please refresh the page"
      });
    }
)
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
          </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
}
