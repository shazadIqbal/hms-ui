import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorService } from './doctor.service';

import { error } from '@angular/compiler/src/util';
import { SelectItem, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

// import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  @ViewChild('myfrom') formRef: ElementRef; //view refrecne is called after ngAfterInit();

  doctor: Doctor = new Doctor();
  date8: any;
  gender: SelectItem[];
  date1: any;
  id: any;
  shareCheck: boolean = true;
  oldPhoneNo: any; //this varible will help us to update the record of doctor in directory
  //because we are autogenerating id in directory so we have to find our updated doctor with the phone number

  selectedcity1: any;

  constructor(
    private drservice: DoctorService,
    private router: Router,
    private mesgService: MessageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.gender = [{ label: 'Male', value: 'Male ' }, { label: 'Female', value: 'Female' }];
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    // console.log('This is id ' + this.id);
    if (this.id) {
      this.drservice.getDoctorById(this.id).subscribe(doc => {
        // console.log(doc);
        // tslint:disable-next-line: no-string-literal
        this.doctor.fullName = doc.fullName;
        this.doctor.mobile = doc.mobile;
        this.doctor.sallary = doc.sallary;
        this.doctor.fees = doc.fees;
        this.doctor.gender = doc.gender;
        this.doctor.email = doc.email;
        this.doctor.hoursday = doc.hoursday;
        this.doctor.nationality = doc.nationality;
        this.doctor.position = doc.position;
        this.doctor.religion = doc.religion;
        this.doctor.qualification = doc.qualification;
        this.doctor.address = doc.address;
        this.doctor.cnic = doc.cnic;
        this.doctor.daysservice = doc.daysservice;
        this.doctor.speciality = doc.speciality;
        this.doctor.dateOfbirth = new Date(doc.dateOfbirth);
        this.doctor.daysservice = doc.daysservice;
        this.doctor.timeIn = doc.timeIn;
        this.doctor.timeOut = doc.timeOut;
        this.doctor.emrNo = doc.emrNo;
        this.doctor.share = doc.share;
        this.oldPhoneNo = this.doctor.mobile;
        // console.log(this.oldPhoneNo);
      });
    }
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  save() {
    // console.log(this.doctor);
    // Update an existing doctor
    if (this.id != 0 && this.id != null) {
      this.drservice.updateDoctorById(this.id, this.oldPhoneNo, this.doctor).subscribe(
        response => {
          this.mesgService.add({
            key: 'u',
            severity: 'info',
            summary: 'Doctor Updated Successfully',
            detail: 'Added'
          });

          // console.log(response);
        },
        error => {
          this.mesgService.add({
            key: 'u',
            severity: 'error',
            summary: 'Failed',
            detail: 'Something went wrong check your internet connection '
          });
          // console.log(error);
        }
      );
    } else {
      // console.log(this.doctor);

      this.drservice.savedoctor(this.doctor).subscribe(
        data => {
          this.mesgService.add({
            key: 's',
            severity: 'success',
            summary: 'Doctor Added Successfully',
            detail: 'Added'
          });
        },
        error => {
          this.mesgService.add({
            key: 'u',
            severity: 'error',
            summary: 'Failed',
            detail: 'Doctor adding Failed!!!'
          });
        }
      );
    }
  }

  onclick() {
    this.save();
  }

  routePage() {
    this.router.navigate(['doctorlist']);
  }
  discounter(value) {
    let tempShare = value;
    tempShare >= 0 && tempShare <= 100 ? (this.shareCheck = true) : (this.shareCheck = false);
    this.doctor.share = tempShare;
    // console.log(this.doctor.share);
  }
}
