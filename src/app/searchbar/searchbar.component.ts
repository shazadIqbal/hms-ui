import { Patient } from './../patientform/patient';
import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';
import { LazyLoadEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  display = false;
  patient: any;
  cols: any[];
  loading = false;
  datasource: any[];
  indexFind: any;
  // tslint:disable-next-line: ban-types
  totalRecords: Number;
  constructor(
    private patientService: PatientserviceService,
    private mesgService: MessageService
  ) {}
  ngOnInit() {
    this.datasource = this.patient = [];
  }

  showDialog() {
    this.patient = [];
    this.loading = true;
    this.display = true;
    this.totalRecords = 0;
    this.patientService.getPatients().subscribe((data: any) => {
      this.datasource = [];
      this.datasource = data;
      this.totalRecords = this.datasource.length;
      console.log(data);
      for (const p of data) {
        this.patient.push({
          id: p.id,
          name: p.name,
          phoneNo: p.phoneNo,
          address: p.address,
          gender: p.gender,
          cnic: p.cnic,
          status: p.status,
          age: p.age
        });
      }
      this.loading = false;
    });
    this.cols = [
      { field: 'id', header: 'Mr No' },
      { field: 'name', header: 'NAME' },
      { field: 'age', header: 'AGE' },
      { field: 'address', header: 'ADDRESS' },
      { field: 'phoneNo', header: 'Phone No' },
      { field: 'gender', header: 'Gender' },
      { field: 'cnic', header: 'CnicNo' },
      { field: 'status', header: 'Status' }
    ];

    // console.log(this.patient);
  }
  deletePatientByID(rowData: any) {
    this.loading = true;
    console.log(rowData);
    //  this.indexFind = this.patient.findIndex(i => i.id === rowData);
    //   console.log(this.indexFind);
    // this.patient.splice(this.indexFind,1);
    this.patientService.deletePatientByMRNO(rowData).subscribe(
      data => {
        this.loading = false;
        if (data) {
          this.mesgService.add({
            severity: 'success',
            summary: 'Deleted',
            detail: 'Patient deleted SuccesFully'
          });
          this.showDialog();
          // this.patientService.getPatients().subscribe((data: any) => {});
          console.log(data);
        } else {
          this.loading = true;
          this.mesgService.add({
            severity: 'error',
            summary: 'Can\'t delete',
            detail: 'You are not authorized for this action'
          });
// tslint:disable-next-line: triple-equals
          if (this.loading == true) {
            this.loading = false;
          }
        }
      },
      error => {
        this.loading = false;
        this.mesgService.add({
          severity: 'error',
          summary: 'Cant not delete',
          detail: 'You are not authorized for this action'
        });
        console.log(error);
      }
    );
  }
}
