import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { DoctorService } from '../adddoctor/doctor.service';
import { environment } from '../../environments/environment';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: any;
  showLoading: boolean;
  cols: any[];

  constructor(
    private router: Router,
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.showLoading = true;
    this.showTable();
  }

  showTable() {
    this.showLoading = true;
    this.doctorService.getdoctors().subscribe(response => {
      // console.log('ye agaya response server se ', response);
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

  onDelete(rowData) {
    // console.log(rowData);
    this.doctorService.deleteDoctorById(rowData).subscribe(
      data => {
        this.doctorService.getdoctors().subscribe((data: any) => {});
        this.showTable();
        // console.log(data);
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: 'Successfully Deleted!'
        });
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Enable to delete!'
        });
      }
    );
  }

  adddoctor() {
    this.router.navigate(['/adddoctor/']);
  }

  backToMain() {
    this.router.navigate(['mainscreen']);
  }
  editDoctorById(rowData) {
    this.router.navigate(['/adddoctor/' + rowData]);
  }

  inactivedoctor(){
    this.router.navigate(['inactivedoctorlist']);
  }
}
