import { Status } from "./../add-appoinment-list/SelectStatus";
import { OpdService } from "./../Services/opd.service";
import { DoctorService } from "./../adddoctor/doctor.service";
import { AddErComponent } from "./../add-er/add-er.component";
import { MainScreenComponent } from "./../main-screen/main-screen.component";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService, SelectItem } from "primeng/api";
import { ErserviceService } from "../services/erservice.service";
import { OpdConsultancy } from "./opdconsultancy";
import { opdGynyModel } from '../opd-gyny/opd-gyny';

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
  checkStatus: boolean = false;
  show : boolean = false;
  enable : boolean;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private doctorService: DoctorService,
    private opd_Service: OpdService,
    private activatedRoute : ActivatedRoute,


    ) { }

    ngOnInit() {
    // this.show = true
     this.enable = true;
    this.getDoctorsOption();
    this.opdObject.id = this.activatedRoute.snapshot.params['id'];
    console.log("this is id"+this.opdObject.id);

  }


  getDoctorsOption() {
    let i = 0;
    this.opdObject.sallary = 0;
    this.doctors = [];
    this.doctorService.getdoctors().subscribe(
      data => {

        if(data){
        this.show = false;
        this.checkStatus = false; //this is for form hide property
        console.log(data);
        data.forEach(e => {
          console.log(e)
          console.log("This is doctors id "+ e.mrNo);
          this.doctors.push({
            label: e.fullName,
            value: {mrNo:e.mrNo,fullName:e.fullName,sallary:e.sallary}
          });
          // console.log({id:this.opdObject.doctors});
        });

      }

    },
    error => {
      console.log("error agya yar");
      this.show = true;
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
    console.log(this.opdObject.sallary)
    this.opdObject.total = this.opdObject.sallary + this.opdObject.discount;
  }

  //FUNCTION FOR BACK BUTTON
  backToMonitor() {

    this.router.navigate(['/monitor/'+ this.opdObject.id])
  }
  //FUNCTION FOR SUBMIT OPD CONSULTANCY
  submitOpd() {

    this.opd_Service.saveOPD(this.opdObject).subscribe(
      data => {
        console.log(this.opdObject);
        this.messageService.add({
          severity: "success",
          summary: "Succesfully"
        });
        this.enable = false;
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
    console.log(this.opdObject);
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