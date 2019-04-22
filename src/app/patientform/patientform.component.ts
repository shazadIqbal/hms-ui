import { MessageService } from 'primeng/api';
import { PatientserviceService } from 'src/app/patientservice.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.css']
})
export class PatientformComponent implements OnInit {
  gender: any = [];
  patient: Patient = new Patient();
  constructor(
    private msgService: MessageService,
    private patientService: PatientserviceService,
    private router: Router
  ) {
    this.gender = [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' }
    ];
  }

  ngOnInit() {

  }

  onSubmit() {
    this.patientService.postPatient(this.patient).subscribe(
      data => {
        
        this.msgService.add({
          severity: 'success',
          summary: 'Service message',
          detail: 'Added'
        });
      },
      error => {
        console.log(error);
        this.msgService.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }
  goBack() {
    this.router.navigate(['']);
  }
}
