import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-gyny-obs-list',
  templateUrl: './gyny-obs-list.component.html',
  styleUrls: ['./gyny-obs-list.component.css']
})
export class GynyObsListComponent implements OnInit {

  display = false;
  patient: any;
  cols: any[];
  loading = false;
  datasource: any[];
  indexFind: any;
  // tslint:disable-next-line: ban-types
  totalRecords: Number;
  
  constructor(
    private router: Router,
    private patientService: PatientserviceService,
    private mesgService: MessageService
  ) { }

  ngOnInit() {
    this.datasource = this.patient = [];
    this.patient = [];
    this.loading = true;
    this.display = true;
    this.totalRecords = 0;
    this.patientService.getAllGynyObsPatients().subscribe((data: any) => {
      this.datasource = [];
      this.datasource = data;
      this.totalRecords = this.datasource.length;

      console.log(typeof(data.cnic))
     
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
          age: p.age,
          husbandOfAndFatherOf: p.husbandOfAndFatherOf,
          registrationDate: new Date(p.registrationDate).toDateString()         
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
      { field: 'status', header: 'Status' },
      { field: 'husbandOfAndFatherOf', header: 'Father/ Husband Name' },
      { field: 'registrationDate', header: 'Registration Date' }
    ];

  }

  toAddPatient(){
    this.router.navigate(['/patientform'])
  }

  backToMain(){
    this.router.navigate(['/mainscreen'])
  }

 
}
