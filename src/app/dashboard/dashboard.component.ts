import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OpdConsultancy } from "../opdconsultancy/opdconsultancy";
import { dashboard } from "./dashboard";
import { DashboardserviceService } from "../Services/dashboardservice.service";
import { MessageService } from "primeng/api";
import { isNull } from "util";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  dashboard: dashboard = new dashboard();
  date1 = new Date();
  datefrom: Date;
  datetill: Date;
  showspinloading: any = true;
  hide: any = true;
  showspinloadingmessage: any = "Please wait";
  converteddate: string;
  type1: any = "line";
  type2: any = "pie3d";
  type3: any = "column2d";
  changedwidth3: any = 1500;
  changedwidth2: any = 600;
  changedwidth1: any = 800;
  showdate: string;
  patientsbydatetotal = {
    chart: {
      caption: "Total No Of Patients Arrived in Barkhia hospital",
      yaxisname: "no of patients",
      subcaption: "",
      numbersuffix: " ",
      rotatelabels: "0",
      setadaptiveymin: "2",
      theme: "fusion",
      paletteColors: "#479761"
    },
    data: []
  };

  duesbydatetotal = {
    chart: {
      caption: "Total amount of dues in barkhia hospital",
      yaxisname: "Rupees (Rs)",
      subcaption: "",
      numbersuffix: " Rs",
      rotatelabels: "0",
      setadaptiveymin: "1",
      theme: "fusion",
      paletteColors: "#479761"
    },
    data: []
  };

  duestotalcoloumnchart = {
    chart: {
      caption: "Total amount of dues in opd-modules",
      yaxisname: "Rupees(Rs)",
      subcaption: "",
      numbersuffix: " Rs",
      rotatelabels: "0",
      setadaptiveymin: "1",
      theme: "fusion",
      paletteColors: "#479761"
    },
    data: []
  };

  totalbydatelinechart = {
    chart: {
      caption: "Total amount in barkhia hospital ",
      yaxisname: "Rupees(Rs)",
      subcaption: "",
      numbersuffix: " Rs",
      rotatelabels: "0",
      setadaptiveymin: "1",
      theme: "fusion",
      paletteColors: "#479761"
    },
    data: []
  };

  totalamountcolumnchart = {
    chart: {
      caption: "Total amount of rupees in opd-modules",
      yaxisname: "Rupees (Rs)",
      subcaption: "",
      numbersuffix: " Rs",
      rotatelabels: "0",
      setadaptiveymin: "1",
      theme: "fusion",
      paletteColors: "#479761"
    },
    data: []
  };

  constructor(
    private router: Router,
    private service: DashboardserviceService,
    private messageservice: MessageService
  ) {}

  ngOnInit() {
    this.saveddate();
  }

  saveddate() {
    this.showdate =
      this.date1.getDate() +
      "-" +
      (this.date1.getMonth() + 1) +
      "-" +
      this.date1.getFullYear();
    let datefrom = this.changedatetostring(this.date1);
    let datetill = this.changedatetostring(this.date1);
    this.dashboard.from = datefrom;
    this.dashboard.till = datetill;

    this.service.totalbydate(this.dashboard).subscribe(
      data => {
        console.log("totalbydate", data);
        this.totalbydatelinechart.data = data;
        this.totalbydatelinechart.chart.subcaption =
          "[" + datefrom + " " + " " + "to" + " " + " " + datetill + "]";
        this.showspinloading = false;
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

    this.service.total(this.dashboard).subscribe(
      responce => {
        console.log("totalamount", responce);

        this.totalamountcolumnchart.data = responce;
        this.totalamountcolumnchart.chart.subcaption =
          "[" + datefrom + " " + " " + "to" + " " + " " + datetill + "]";
        this.showspinloading = false;
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

    this.service.duestotal(this.dashboard).subscribe(
      data => {
        console.log("duestotal", data);
        this.duestotalcoloumnchart.data = data;
        this.duestotalcoloumnchart.chart.subcaption =
          "[" + datefrom + " " + " " + "to" + " " + " " + datetill + "]";
        this.showspinloading = false;
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

    this.service.duesbydate(this.dashboard).subscribe(
      data => {
        console.log("duesbydate", data);
        this.duesbydatetotal.data = data;
        this.duesbydatetotal.chart.subcaption =
          "[" + datefrom + " " + " " + "to" + " " + " " + datetill + "]";
        this.showspinloading = false;
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

    this.service.patientsbydate(this.dashboard).subscribe(
      data => {
        console.log("patientsbydate", data);
        this.patientsbydatetotal.data = data;
        this.patientsbydatetotal.chart.subcaption =
          "[" + datefrom + " " + " " + "to" + " " + " " + datetill + "]";
        this.showspinloading = false;
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

  onfilter() {
    console.log(this.datefrom);
    let date1;
    let date2;

    this.showdate =
      this.date1.getDate() +
      "-" +
      (this.date1.getMonth() + 1) +
      "-" +
      this.date1.getFullYear();
    let checkdate1 = this.datefrom;
    let checkdate2 = this.datetill;
    if (checkdate1 == undefined) {
      this.dashboard.from = this.changedatetostring(this.date1);
    }
    if (checkdate2 == undefined) {
      this.dashboard.till = this.changedatetostring(this.date1);
    } else {
      date1 = this.changedatetostring(this.datefrom);
      date2 = this.changedatetostring(this.datetill);
      this.dashboard.from = date1;
      this.dashboard.till = date2;
    }

    this.service.totalbydate(this.dashboard).subscribe(
      data => {
        console.log(data);

        this.totalbydatelinechart.data = data.reverse();
        this.totalbydatelinechart.chart.subcaption =
          "[" + date1 + " " + " " + "to" + " " + " " + date2 + "]";
        this.showspinloading = false;
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

    this.service.total(this.dashboard).subscribe(
      data => {
        //for total
        console.log(data);
        this.totalamountcolumnchart.data = data.reverse();
        this.totalamountcolumnchart.chart.subcaption =
          "[" + date1 + " " + " " + "to" + " " + " " + date2 + "]";
        this.showspinloading = false;
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

    this.service.duestotal(this.dashboard).subscribe(
      data => {
        console.log(data);
        this.duestotalcoloumnchart.data = data.reverse();
        this.duestotalcoloumnchart.chart.subcaption =
          "[" + date1 + " " + " " + "to" + " " + " " + date2 + "]";
        this.showspinloading = false;
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

    this.service.duesbydate(this.dashboard).subscribe(
      data => {
        console.log(data);
        this.duesbydatetotal.data = data.reverse();
        this.duesbydatetotal.chart.subcaption =
          "[" + date1 + " " + " " + "to" + " " + " " + date2 + "]";
        this.showspinloading = false;
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

    this.service.patientsbydate(this.dashboard).subscribe(
      data => {
        console.log(data);
        this.patientsbydatetotal.data = data.reverse();
        this.patientsbydatetotal.chart.subcaption =
          "[" + date1 + " " + " " + "to" + " " + " " + date2 + "]";
        this.showspinloading = false;
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

  backToMonitor() {
    this.router.navigate(["mainscreen"]);
  }
  allreports() {
    this.router.navigate(["allreports"]);
  }

  changedatetostring(
    date: Date // method of date to string;
  ) {
    this.converteddate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return this.converteddate;
  }
}
