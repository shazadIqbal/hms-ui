import { Location } from "@angular/common";
import { Status } from './../add-appoinment-list/SelectStatus';
import { PatientObservationService } from './../Services/patient-observation.service';
import { DoctorService } from './../adddoctor/doctor.service';
import { AddErComponent } from './../add-er/add-er.component';
import { MainScreenComponent } from './../main-screen/main-screen.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { ErserviceService } from '../services/erservice.service';
import { patientobservation } from './patientobservation';
import { from } from 'rxjs';

@Component({
  selector: 'app-patient-observation',
  templateUrl: './patient-observation.component.html',
  styleUrls: ['./patient-observation.component.css']
})
export class PatientObservationComponent implements OnInit {
  doctors: SelectItem[];
  // selectedDoctor : any;
  calDiscount = 0;
  //object of opd consultancy
  patientObservationObject: patientobservation = new patientobservation();
  getStatus: boolean = true;
  checkStatus: boolean = false;
  show: boolean = false;
  checked: boolean = false;
  enable: boolean;
  disbaleSubmitButton : boolean = true;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private doctorService: DoctorService,
    private patientObservationService: PatientObservationService,
    private activatedRoute: ActivatedRoute,
    private _location : Location
  ) {}

  ngOnInit() {
    // this.show = true
    this.enable = true;
    this.getDoctorsOption();
    this.patientObservationObject.id = this.activatedRoute.snapshot.params['id'];
    console.log('this is id' + this.patientObservationObject.id);
  }

  getDoctorsOption() {
    let i = 0;
    this.patientObservationObject.fees = 0;
    this.doctors = [];
    this.doctorService.getdoctors().subscribe(
      data => {
        if (data) {
          this.show = false;
          this.checkStatus = false; //this is for form hide property
          console.log(data);
          data.forEach(e => {
            console.log(e);
            console.log('This is doctors id ' + e.mrNo);
            this.doctors.push({
              label: e.fullName,
              value: { mrNo: e.mrNo, fullName: e.fullName, fees: e.fees }
            });
            // console.log({id:this.patientObservationObject.doctors});
          });
        }
      },
      error => {
        console.log('error agya yar');
        this.show = true;
        this.checkStatus = true;
        this.messageService.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }
  //Getting Doctors'fees
  doctorDropdown() {
    // console.log(this.selectedDoctor);
    console.log(this.patientObservationObject.doctors['fullName']);
    this.patientObservationObject.fees = 0; //it will also work for the negative
    this.patientObservationObject.total = 0;
    this.patientObservationObject.discount = 0;
    this.patientObservationObject.fees = this.patientObservationObject.doctors['fees'];
    console.log(this.patientObservationObject.fees);
    this.patientObservationObject.total =
      this.patientObservationObject.fees + this.patientObservationObject.discount;
  }

  //FUNCTION FOR BACK BUTTON
  backToMonitor() {
    this._location.back();
  }
  //FUNCTION FOR SUBMIT OPD CONSULTANCY
  submitOpd() {
    this.patientObservationService.savePatientObservation(this.patientObservationObject).subscribe(
      data => {
        console.log(this.patientObservationObject);
        console.log(data);
        this.messageService.add({
          severity: 'success',
          summary: 'Succesfully'
        });
        this.enable = false;
      },
      error => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
    console.log(this.patientObservationObject);
  }
  onGreaterDiscount(){
    if(this.patientObservationObject.discount > this.patientObservationObject.fees){
      this.disbaleSubmitButton = false;
    }
    else{
      this.disbaleSubmitButton = true;
    }
  }

  //function for totalprice
  getTotal(value: any) {
    this.patientObservationObject.cashRecieved = 0;
    console.log(value);
    this.patientObservationObject.cashRecieved = value;
    this.patientObservationObject.total = this.patientObservationObject.fees - this.patientObservationObject.discount;
  }

  discount(){
    this.onGreaterDiscount();
    console.log("hello discount")
   let discount = this.patientObservationObject.discount;
   if(discount <= this.patientObservationObject.fees){
    this.patientObservationObject.total = this.patientObservationObject.fees - discount;
   }

  }
  }
