import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PatientserviceService } from 'src/app/patientservice.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


// import { Router } from '@angular/router';
// import { ViewChild, ElementRef } from '@angular/core'; //viewChild decorator is used to access refrence varibale outside the template  we can access id of any component using view child
@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.css']
})
export class PatientformComponent implements OnInit {
  gender: any = [];
  patient: Patient = new Patient();
  value: Date;
  isGynyObs: boolean = false;
  patientid: number;

  // @ViewChild('userForm') formRef: ElementRef; //view refrecne is called after ngAfterInit();

  constructor(
    private msgService: MessageService,
    private patientService: PatientserviceService,
    private router: Router,

    private activeRoute:ActivatedRoute,
    private _location: Location

  ) {
    this.gender = [{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }];
  }





  ngOnInit() {

    console.log(this.isGynyObs);
    this.patientid = this.activeRoute.snapshot.params['id'];
    if (this.patientid) {
      this.gettingPatientById();
    }

  }

  isGynObsFn() {
    console.log(this.isGynyObs)
    this.patient.gynAndObsRegistration = this.isGynyObs;
    console.log("mein gynu obs hon", this.patient.gynAndObsRegistration)
  }

  gettingPatientById() {
    this.patientService.getPatientsByMRNO(this.patientid).subscribe(data => {
      if (this.patientid && data.gynAndObsRegistration == true) {
        this.isGynyObs = true;
        this.patient.name = data.name;
        this.patient.cnic = data.cnic;
        this.patient.age = data.age;
        this.patient.address = data.address;
        this.patient.gender = data.gender;
        this.patient.phoneNo = data.phoneNo;
        this.patient.husbandOfAndFatherOf = data.husbandOfAndFatherOf;
        this.patient.registrationDate = new Date(data.registrationDate);
        console.log("if main hun")
      }
      else if (this.patientid) {
        this.patient.name = data.name;
        this.patient.cnic = data.cnic;
        this.patient.age = data.age;
        this.patient.address = data.address;
        this.patient.gender = data.gender;
        this.patient.phoneNo = data.phoneNo;
        console.log("else if main hun")
      }
    })
  }

  // onSubmit() {
  // if(this.patientid != undefined){
  //   this.patientService.UpdatePatient(this.patientid,this.patient).subscribe(
  //     data =>{
  //       this.msgService.add({
  //         severity: 'info',
  //         summary: 'Service message',
  //         detail: 'Patient updated successfully!'
  //       });
  //     },
  //     error => {
  //       console.log(error);
  //       this.msgService.add({
  //         severity: 'error',
  //         summary: 'Error Found',
  //         detail: 'Something went wrong check your internet connection '
  //       });
  //     }

  //   );
  //   console.log("in update patient",this.patient);
  // }

  // else{
  //   console.log("Request payload",this.patient)


  showConfirm() {
    this.msgService.clear();
    this.msgService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  onConfirm() {
    this.msgService.clear('c');
    if (this.patientid) {
      this.patientService.UpdatePatient(this.patientid, this.patient).subscribe(
        data => {
          this.msgService.add({
            key: 'p',
            severity: 'info',
            summary: 'Service message',
            detail: 'Patient updated successfully!'
          });
        },
        error => {
          console.log(error);
          this.msgService.add({
            key: 'p',
            severity: 'error',
            summary: 'Error Found',
            detail: 'Something went wrong check your internet connection '
          });
        }

      );
      console.log("in update patient", this.patient);
    }
    // Agr new patient aya hay koi add hony toh
    else {
      console.log("Request payload", this.patient)

      this.patientService.postPatient(this.patient).subscribe(
        data => {

          if (data == "00") {
            this.msgService.add({
              key: 'p',
              severity: 'success',
              summary: 'Patient Added',
              detail: 'Added'
            });
          }
          else{
            this.msgService.add({
              key: 'p',
              severity: 'warn',
              summary: 'Paient Already Exists ',
              detail: 'Failed'
            });
          }
        },
        error => {
          console.log(error);
          this.msgService.add({
            key: 'p',
              severity: 'warn',
              summary: 'Paient Already Exists ',
              detail: 'Failed'
          });
        }
      );
    }
  }

  onReject() {
    this.msgService.clear('c');
  }


  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }
  goBack() {
    this._location.back();
  }


}



