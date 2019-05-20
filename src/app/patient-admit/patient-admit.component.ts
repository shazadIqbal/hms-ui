import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
// import { Router } from "@angular/router";
import { SelectItem, MessageService } from "primeng/api";
import { OpdPatientAdmit } from "./patient-admit";
import { AdmissionService } from "../Services/admission.service";
import { OpdAdmitSend } from "./patient-admit";
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: "app-patient-admit",
  templateUrl: "./patient-admit.component.html",
  styleUrls: ["./patient-admit.component.css"]
})
export class PatientAdmitComponent implements OnInit {
  selectedBed: SelectItem[];
  public _opdPatientAdmit = new OpdPatientAdmit(); //model for populating values in the fileds of html
  public _opdPatientToSend = new OpdAdmitSend(); //selected model to send
  bedType: SelectItem[];
  display = false;
  patientName: String;
  patientMrNo: Number;
  date;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private admissionSer: AdmissionService,
    private patientService: PatientserviceService
  ) { }
  checkStatus: boolean = false;
  show: boolean = false;
  enable: boolean;

  ngOnInit() {

    let id = this.activatedRoute.snapshot.params["id"];
    this.patientService.getPatientsByMRNO(id).subscribe((a) => {
      console.log(a)
      this.patientName = a.name;
      this.patientMrNo = a.id;
    })
    this.enable = true;
    this.bedsDropdown();
    // this.noOfBedsAvailable();
    this._opdPatientAdmit.patientID = this.activatedRoute.snapshot.params["id"]; //patientpatientID
    this._opdPatientToSend.patientID = this.activatedRoute.snapshot.params[
      "id"
    ]; //patientpatientID
    console.log("this is patientID " + this._opdPatientToSend.patientID);
  }
  backToMonitor() {
    this.router.navigate(["/monitor/" + this._opdPatientAdmit.patientID]);
  }

  bedsDropdown() {
    this._opdPatientAdmit.cashRecieved = 0;
    this._opdPatientToSend.cashRecieved = 0;

    this.bedType = [
      { label: "General bed", value: "general" },
      { label: "Special bed", value: "special" }
    ];
    this.noOfBedsAvailable();
  }

  noOfBedsAvailable() {
    // let i = 0;
    this._opdPatientAdmit.price = 0;
    this.selectedBed = [];
    this.admissionSer
      .getBedsForSelectBedType(this._opdPatientAdmit.bedType)
      .subscribe(
        data => {
          this.show = false;
          this.checkStatus = false;

          console.log("selected bed type" + this._opdPatientAdmit.bedType);
          data.forEach(e => {
            console.log(e);
            this._opdPatientAdmit.bedID = e.id;
            console.log(
              "This is bed id  ",
              this._opdPatientAdmit.bedID
            );
            this.selectedBed.push({
              label: e.id,
              value: { id: e.id, price: e.price }
            });

          });
        },
        error => {
          console.log("Error occured");
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

  // getting price of the selected bed type
  showPrice() {
    if (this._opdPatientAdmit.selectedBed["price"] == null) {
      console.log("error");
    }
    // this._opdPatientAdmit.cashRecieved = 0;
    this._opdPatientAdmit.price = 0;
    this._opdPatientToSend.price = 0;
    this._opdPatientAdmit.price = this._opdPatientAdmit.selectedBed["price"];
    this._opdPatientAdmit.bedID = this._opdPatientAdmit.selectedBed["id"];
    this._opdPatientToSend.price = this._opdPatientAdmit.price;
    this._opdPatientToSend.bedType = this._opdPatientAdmit.bedType;



    console.log(this._opdPatientAdmit.price);
  }

  submitOpdPatientAdmit() {
    // You can send only patient and bed patientID
    console.log("Patient admitted model ", this._opdPatientToSend);
    this._opdPatientToSend.price = this._opdPatientAdmit.price;
    this._opdPatientToSend.bedID = this._opdPatientAdmit.bedID;
    this._opdPatientToSend.patientID = this._opdPatientAdmit.patientID;
    this._opdPatientToSend.cashRecieved = this._opdPatientAdmit.cashRecieved;
    this.date = new Date();
    this.admissionSer.savedOpdAdmit(this._opdPatientToSend).subscribe(
      data => {
        if (data) {
          console.log(data);
          this.messageService.add({
            severity: "success",
            summary: "OPD ADMIT SUCCESSFULL",
            detail: "True"
          });
        }
        this.enable = false;
      },
      error => {
        this.messageService.add({
          severity: "erro",
          summary: "OPD ADMIT UNSUCCESSFULL",
          detail: "wait wait"
        });
      }
    );
  }
  showDialog() {
    this.display = true;
  }
}
