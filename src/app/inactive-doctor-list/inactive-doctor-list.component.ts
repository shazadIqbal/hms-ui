import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../adddoctor/doctor.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-inactive-doctor-list',
  templateUrl: './inactive-doctor-list.component.html',
  styleUrls: ['./inactive-doctor-list.component.css']
})
export class InactiveDoctorListComponent implements OnInit {
  doctors: any;
  showLoading: boolean;
  cols: any[];
  constructor(private router: Router , private doctorService : DoctorService , private messageService : MessageService) { }

  ngOnInit() {
    this.showLoading = true;
    this.showData();
  }

  showData()
  {
    this.showLoading = true;
    this.doctorService.getInActiveDoctor().subscribe(response => {
       console.log('ye agaya response server se ', response);
      // this.showLoading = false;
      if (response) {
        this.showLoading = false;
        this.doctors = response;
      }
      // this.showLoading = true;
    });

    this.cols = [
      { field: 'mrno', header: 'DOCTOR ID' },
      { field: 'fullName', header: 'FULL NAME' },
      { field: 'gender', header: 'GENDER' },
      { field: 'fees', header: 'FEES' },
      { field: 'mobile', header: 'MOBILE PHONE' },
      { field: 'address', header: 'ADDRESS' }
    ];

    this.doctors = [];
  }
  activateDoctorById(rowdata){
      this.doctorService.activateDoctor(rowdata).subscribe(response=>{
        console.log("activated");
        this.showData();
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: 'Successfully Activated!'
        });
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Unable to Activate!'
        });
      });
  }

    backToAddDoc(){
    this.router.navigate(['doctorlist']);
  }
}
