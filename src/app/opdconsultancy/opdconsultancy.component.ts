import { Status } from "./../add-appoinment-list/SelectStatus";
import { OpdService } from "./../Services/opd.service";
import { DoctorService } from "./../adddoctor/doctor.service";
import { AddErComponent } from "./../add-er/add-er.component";
import { MainScreenComponent } from "./../main-screen/main-screen.component";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService, SelectItem } from "primeng/api";
import { ErserviceService } from "../services/erservice.service";
import { OpdConsultancy } from "./opdconsultancy";

@Component({
  selector: "app-opdconsultancy",
  templateUrl: "./opdconsultancy.component.html",
  styleUrls: ["./opdconsultancy.component.css"]
})
export class OpdconsultancyComponent implements OnInit {
  doctors: SelectItem[];
  // selectedDoctor : any;
  calDiscount = 0;
  //object of opd consultancy
  opdObject: OpdConsultancy = new OpdConsultancy();
  getStatus: boolean = true;
  checkStatus: boolean;
  show : boolean = true;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private comp: AddErComponent,
    private doctorService: DoctorService,
    private opd_Service: OpdService
  ) { }

  ngOnInit() {
    // this.checkStatus = true;
    this.getDoctorsOption();
  }


  getDoctorsOption() {

    this.checkStatus = true;
    let i = 0;
    this.opdObject.sallary = 0;
    this.doctors = [];
    this.doctorService.getdoctors().subscribe(
      data => {
        this.show = false; //this is for form hide property
        console.log(data);
        data.forEach(e => {
          this.show = false;
          this.checkStatus = false; //this is for loader
          this.doctors.push({
            label: e.fullName,
            value: e
          });
        });


      },
      error => {
        console.log("error agya yar");
          this.checkStatus = true;
          this.messageService.add({
            severity: "error",
            summary: "Error Found",
            detail: "Something went wrong check your internet connection "
          });
        }

    );
  }
  //Getting Doctors'Fees
  doctorDropdown() {

    // console.log(this.selectedDoctor);
    console.log(this.opdObject.doctors["fullName"]);
    this.opdObject.sallary = 0; //it will also work for the negative
    this.opdObject.total = 0;
    this.opdObject.discount = 0;
    this.opdObject.sallary = this.opdObject.doctors["sallary"];
    this.opdObject.total = this.opdObject.sallary + this.opdObject.discount;
  }

  //FUNCTION FOR BACK BUTTON
  backToMonitor() {
    // this.comp.back();
    this.router.navigate(["/monitor"]);
  }
  //FUNCTION FOR SUBMIT OPD CONSULTANCY
  submitOpd(formdata: any) {
    this.opd_Service.saveOPD(formdata).subscribe(
      data => {
        console.log(formdata);
        this.messageService.add({
          severity: "success",
          summary: "Succesfully"
        });
      },
      error => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      }
    );
    console.log(formdata);
  }

  //function for totalprice
  getTotal(value: any) {
    this.opdObject.cashRecieved = 0;
    console.log(value);
    this.opdObject.discount = 0;
    this.opdObject.cashRecieved = value;
    this.opdObject.total = this.opdObject.total;
  }


}
