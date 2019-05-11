import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PatientserviceService } from 'src/app/patientservice.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core'; //viewChild decorator is used to access refrence varibale outside the template  we can access id of any component using view child
@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.css']
})
export class PatientformComponent implements OnInit {
  gender: any = [];
  patient: Patient = new Patient();
  @ViewChild('userForm') formRef: ElementRef; //view refrecne is called after ngAfterInit();

  constructor(
    private msgService: MessageService,
    private patientService: PatientserviceService,
    private router: Router
  ) {
    this.gender = [{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }];
  }



  ngOnInit() {

  }


  showConfirm() {
    this.msgService.clear();
    this.msgService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  onConfirm() {
    this.msgService.clear('c');
    this.patientService.postPatient(this.patient).subscribe(
      data => {

        this.msgService.add({
          key: 'p',
          severity: 'success',
          summary: 'Patient Added',
          detail: 'Added'
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
  }

  onReject() {
    this.msgService.clear('c');
  }

  // onSubmit() {
  //   // this.patientService.postPatient(this.patient).subscribe(
  //   //   data => {

  //   //     this.msgService.add({
  //   //       severity: 'success',
  //   //       summary: 'Service message',
  //   //       detail: 'Added'
  //   //     });
  //   //   },
  //   //   error => {
  //   //     console.log(error);
  //   //     this.msgService.add({
  //   //       severity: 'error',
  //   //       summary: 'Error Found',
  //   //       detail: 'Something went wrong check your internet connection '
  //   //     });
  //   //   }
  //   // );
  // }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }
  goBack() {
    this.router.navigate(['mainscreen']);
  }
}
