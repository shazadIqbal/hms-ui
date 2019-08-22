import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CashFlowOfDoctor } from "./cashFlowDoctor";
import { DashboardserviceService } from "../Services/dashboardservice.service";
import { MessageService, SelectItem } from "primeng/api";
import { DoctorService } from "../adddoctor/doctor.service";

@Component({
  selector: "app-cashflow-of-doctor",
  templateUrl: "./cashflow-of-doctor.component.html",
  styleUrls: ["./cashflow-of-doctor.component.css"]
})
export class CashflowOfDoctorComponent implements OnInit {
  date = new Date();
  transactionsofdoctor: any[]=[];
  cols: any[];
  showdate: any;
  dateToday=new Date();
  convertedDate: String;
  cashflowofdoctor: CashFlowOfDoctor = new CashFlowOfDoctor();
  showLoading: any = true;
  doctorsDropdown: SelectItem[];
  dateFrom: Date;
  dateTill: Date;
  role: String;
  sum: number;

  constructor(
    private router: Router,
    private service: DashboardserviceService,
    private messageservice: MessageService,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    this.showdate =
      this.date.getDate() +
      "-" +
      (this.date.getMonth() + 1) +
      "-" +
      this.date.getFullYear();
    this.getDoctorsInDropdown();
    this.getAllTransactions();

    this.doctorsDropdown = [{label: "None", value: null}];


    this.cols = [
      { field: "id", header: "ID" },
      { field: "transactionDate", header: "Transaction Date" },
      { field: "totalAmount", header: "Total Amount" },
      { field: "transactionType", header: "Transaction Type" },
      { field: "description", header: "Desccription" },
      { field: "currency", header: "Currency" },
      { field: "operationType", header: "Operation Type" }
    ];
  }

  getAllTransactions() {
    let datefrom =
      this.date.getFullYear() +
      "/" +
      (this.date.getMonth() + 1) +
      "/" +
      (this.date.getDate() - 1);
    let datetill =
      this.date.getFullYear() +
      "/" +
      (this.date.getMonth() + 1) +
      "/" +
      (this.date.getDate() + 1);

    this.cashflowofdoctor.from = datefrom;
    this.cashflowofdoctor.till = datetill;

    this.service.postCashFlowOfDoctor(this.cashflowofdoctor).subscribe(data => {
      this.transactionsofdoctor = [];
      if(data){
      data.map(value => {
        this.transactionsofdoctor.push({
          id: value.id,
          transactionDate: new Date(value.transactionDate).toDateString(),
          receivedAmount: value.receivedAmount,
          totalAmount: value.totalAmount,
          transactionType: value.transactionType,
          description: value.description,
          currency: value.currency,
          operationType: value.operationType,
          dues: value.dues
        });
      });
    }
      this.showLoading = false;
    });
  }

  getDoctorsInDropdown() {
    this.doctorsDropdown = [];
    this.doctorService.getdoctors().subscribe(
      data => {
        if (data) {
          data.forEach(e => {
            console.log(e);
            console.log("This is doctors id " + e.mrNo);
            this.doctorsDropdown.push({
              label: e.fullName,
              value: e.accountNo
            });
          });
        }
      },
      error => {
        console.log("error agya yar");
        this.messageservice.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      }
    );
  }

  onfilter() {
    let date1, date2, role1;
    let checkRole = this.role;
    if (this.dateFrom == undefined) {
      this.cashflowofdoctor.from = this.convertDate(this.dateToday);
      this.dateFrom = this.dateToday;
    }
    if (this.dateTill == undefined) {
      this.cashflowofdoctor.till = this.convertDate(this.dateToday);
      this.dateTill = this.dateToday;
    }
    if (checkRole == undefined || checkRole == 'None') {
      this.cashflowofdoctor.role = null;
      date1 = this.dateFrom.getFullYear()+"/"+(this.dateFrom.getMonth()+1)+"/"+(this.dateFrom.getDate()-1);
      date2 = this.dateTill.getFullYear()+"/"+(this.dateTill.getMonth()+1)+"/"+(this.dateTill.getDate()+1); 
      role1 = this.role;
      this.cashflowofdoctor.from = date1;
      this.cashflowofdoctor.till = date2;
      this.cashflowofdoctor.role = role1;
    } else {
      date1 = this.convertDate(this.dateFrom);
      date2 = this.convertDate(this.dateTill);
      role1 = this.role;
      this.cashflowofdoctor.from = date1;
      this.cashflowofdoctor.till = date2;
      this.cashflowofdoctor.role = role1;
    }

    this.service.postCashFlowOfDoctor(this.cashflowofdoctor).subscribe(
      data => {
        console.log('transaction',data)
        this.sum = 0;
        this.transactionsofdoctor = [];
        if(data){
          data.map(value => {
            this.transactionsofdoctor.push({
              'id': value.id,
              'transactionDate': new Date(value.transactionDate).toDateString(),
              'totalAmount': value.totalAmount,
              'transactionType': value.transactionType,
              'description': value.description,
              'currency': value.currency,
              'operationType': value.operationType,
            });
            this.sum = value.totalAmount + this.sum;
          });
  
        }
        
        console.log("==========================>", this.sum);
      },
      
      error => {
        console.log(error);
        this.messageservice.add({
          severity: "error",
          summary: "Status",
          detail: "something went wrong please refresh the page"
        });
      }
    );
  }

  convertDate(date: Date) {
    return (this.convertedDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
  }

  convertDateForNullRole(date: Date){
    return (this.convertedDate =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
  }



  allreports() {
    this.router.navigate(["allreports"]);
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
