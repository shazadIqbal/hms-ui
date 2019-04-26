import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../Services/appointment-service.service';
import { MessageService } from 'primeng/api';
import { Status } from './SelectStatus';
import { _dateClass } from './dateModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-appoinment-list',
  templateUrl: './add-appoinment-list.component.html',
  styleUrls: ['./add-appoinment-list.component.css']
})
export class AddAppoinmentListComponent implements OnInit {
  varr: any;
  cols: any[];
  showLoading: any;
  _existingPatient: any;
  SelectStatus: any;
  date1: Date;
  datefilter: Date;
  _status: Status = new Status();
  _date: _dateClass = new _dateClass();
  constructor(
    private router: Router,
    private _appointmentService: AppointmentServiceService,
    private messageService: MessageService
  ) {
    this.SelectStatus = [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Done', value: 'done' }
    ];
  }

  ngOnInit() {
    this.showTable();
  }

  showStatus() {
    this.showLoading = true;
    this._appointmentService.getStatus(this._status.status).subscribe(Response => {
      console.log('response is here', Response);
      this.showLoading = false;
      for (let i in Response) {
        this._existingPatient.push({
          id: Response[i].id,
          selectDoctor: Response[i].selectDoctor,
          patientName: Response[i].patientName,
          phoneNo: Response[i].phoneNo,
          appoinmentDate: new Date(Response[i].appoinmentDate).toDateString(),
          time: Response[i].time
        });
      }
    });

    this.cols = [
      { field: 'id', header: 'MR Number' },
      { field: 'selectDoctor', header: 'Doctor Name' },
      { field: 'patientName', header: 'Patient Name' },
      { field: 'phoneNo', header: 'patient Number' },
      { field: 'appoinmentDate', header: 'Appointment Date' },
      { field: 'time', header: 'Time' }
    ];

    this._existingPatient = [];
  }

  showDate(d) {
    this.showLoading = true;
    this._appointmentService.getDate(d).subscribe(Response => {
      console.log('response is here', Response);
      this.showLoading = false;
      for (let i in Response) {
        this._existingPatient.push({
          id: Response[i].id,
          selectDoctor: Response[i].selectDoctor,
          patientName: Response[i].patientName,
          phoneNo: Response[i].phoneNo,
          appoinmentDate: new Date(Response[i].appoinmentDate).toDateString(),
          time: Response[i].time
        });
      }
    });

    this.cols = [
      { field: 'id', header: 'MR Number' },
      { field: 'selectDoctor', header: 'Doctor Name' },
      { field: 'patientName', header: 'Patient Name' },
      { field: 'phoneNo', header: 'patient Number' },
      { field: 'appoinmentDate', header: 'Appointment Date' },
      { field: 'time', header: 'Time' }
    ];

    this._existingPatient = [];
  }

  showTable() {
    this.showLoading = true;
    this._appointmentService.getAppointment().subscribe(Response => {
      console.log('response is here', Response);
      this.showLoading = false;
      for (let i in Response) {
        this._existingPatient.push({
          id: Response[i].id,
          selectDoctor: Response[i].selectDoctor,
          patientName: Response[i].patientName,
          phoneNo: Response[i].phoneNo,
          appoinmentDate: new Date(Response[i].appoinmentDate).toDateString(),
          time: Response[i].time
        });
      }
    });

    this.cols = [
      { field: 'id', header: 'MR Number' },
      { field: 'selectDoctor', header: 'Doctor Name' },
      { field: 'patientName', header: 'Patient Name' },
      { field: 'phoneNo', header: 'patient Number' },
      { field: 'appoinmentDate', header: 'Appointment Date' },
      { field: 'time', header: 'Time' }
    ];

    this._existingPatient = [];
  }
  backToMain() {
    this.router.navigate(['/mainscreen']);
  }
  existingPatient() {
    this.router.navigate(['/existingPatient']);
  }
  newPatient() {
    this.router.navigate(['/patientform']);
  }

  deleteAppointmentByID(rowData: any) {
    this.messageService.add({
      severity: 'error',
      summary: 'Status',
      detail: 'Successfully Deleted'
    });
    console.log(rowData);
    this._appointmentService.deleteById(rowData).subscribe(
      data => {
        this._appointmentService.getAppointment().subscribe((data: any) => {});

        this.showTable();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  doneAppointmentByID(rowData: any) {
    this.messageService.add({
      severity: 'successfull',
      summary: 'Status',
      detail: 'Appointment Done'
    });
    console.log(rowData);
    this._appointmentService.doneById(rowData).subscribe(
      data => {
        this._appointmentService.getAppointment().subscribe((data: any) => {});

        this.showTable();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  saveStatus() {
    this._existingPatient = [];
    this._appointmentService.saveStatus(this._status.status).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.showStatus();
  }
  // saveDate(){

  //   this._existingPatient = [];
  //   this._appointmentService.saveDate(this._date).subscribe((data) =>{
  //     console.log(data);
  // }, error=>{
  //  console.log(error);

  // })
  // this.showDate();
  // }

  statusOnClick() {
    this.showStatus();
  }
  dateOnClick() {
    console.log(this.datefilter);
    let d: string =
      this.datefilter.getFullYear() +
      '-' +
      (this.datefilter.getMonth() + 1) +
      '-' +
      this.datefilter.getDay();
    console.log(d);

    this.showDate(d);
  }
}
