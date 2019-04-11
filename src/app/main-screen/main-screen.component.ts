import { PatientComponent } from '../patient/patient.component';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientserviceService} from '../patientservice.service';
import {MessageService} from 'primeng/api';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  loading = false;
  constructor(
    private router: Router,
    private patientService: PatientserviceService,
    private mesgService: MessageService
  ) {
  }

    ngOnInit() {
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  addDirectory()
  {
    this.router.navigate(['adddirectory'])
  }

  addAppointment()
  {
    this.router.navigate(['appoinmentList'])
  }


  check(mrNo: any) {
    this.loading = true;
    this.patientService.getPatientsByMRNO(mrNo).subscribe(data => {
      // tslint:disable-next-line: triple-equals
      if (data == null || mrNo == "") {
        console.log(data);
        // console.log(mrNo+"hello");
        console.log("patientDoesNoteExists");
        this.mesgService.add({
          severity: "error",
          summary: "No Record Found",
          detail: "Add a new Patient Please"
        });

        setTimeout(() => {
          this.router.navigate(['/patientform']);
        }, 3000);
      } else {
        //  console.log(mrNo+"hello");
        this.mesgService.add({
          severity: 'success',
          summary: 'SUCCESS',
          detail: 'Patient Found'
        });
        console.log('patientExists');
        this.router.navigate(['/patient']);
      }
    }),
// tslint:disable-next-line: no-unused-expression
      error => {
        this.mesgService.add({
          severity: 'error',
          summary: 'FAILED',
          detail: 'Please check your internet connection'
        });
      };
  }

  onConfirm() {
    this.mesgService.clear("c");
  }

  onReject() {
    this.mesgService.clear("c");
  }

  doctorList(){
    this.router.navigate(["/doctorlist"]);
  }

  panelList(){
    this.router.navigate(["/panellist"]);
  }

  addlabtest(){
    this.router.navigate(["/addlabtest"]);
  }
  gotoErService() {
    this.router.navigate(["/er"]);
  }

}
