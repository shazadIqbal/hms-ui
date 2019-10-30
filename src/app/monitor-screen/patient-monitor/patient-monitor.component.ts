import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../../services/monitor.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PatientTransactionHistoryService } from '../../services/patient-transaction-history.service';
import { identifierName } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-monitor',
  templateUrl: './patient-monitor.component.html',
  styleUrls: ['./patient-monitor.component.css']
})
export class PatientMonitorComponent implements OnInit {
  registration: Boolean = false;

  constructor(
    private patient: MonitorService,
    private messageService: MessageService,
    private historyService: PatientTransactionHistoryService,
    private route: Router,
    private activateRoute: ActivatedRoute,
    private _location: Location,
    private router: Router
  ) {}

  public id;
  public name;
  public number;
  public date: String;
  public opd;
  public opdPackage;
  public total;
  public lab;
  public dues;
  public image;
  public er;
  public isLoading;
  public gynAndObsRegistration;
  public husbandOfAndFatherOf;
  public registrationDate;
  public gyne;
  public admit;
  public obs;
  public admitLabel;
  ngOnInit() {
    this.isLoading = true;
    // console.log('hello');
    const id = this.activateRoute.snapshot.params.id;

    this.patient.getPatientMonitor(id).subscribe(
      response => {
        if (response.id == id) {
          this.isLoading = false;
          // console.log(response);
          this.id = response.id;
          this.name = response.name;
          this.number = response.number;
          this.gynAndObsRegistration = response.gynAndObsRegistration || 'Not registered';
          this.date = new Date(response.date).toLocaleString();
          this.opd = response.opd;
          this.lab = response.lab;
          this.image = response.image;
          this.er = response.er;
          this.dues = response.dues;
          this.opdPackage = response.patientPackage;
          // console.log(response.opdPackage);
          // console.log(this.opdPackage);
          this.total = response.total;
          this.registrationDate = new Date(response.registrationDate).toDateString();
          this.husbandOfAndFatherOf = response.husbandOfAndFatherOf || 'None';
          this.registration = response.gynAndObsRegistration;
          this.admit = response.admit;
          this.gyne = response.gyne;
          this.obs = response.obs;
          this.admitLabel = response.admitLabel;
        } else {
          this.route.navigate(['/mainscreen']);
        }
      },
      error => {
        this.isLoading = false;
        // console.log(error);
      }
    );
  }

  backToMain() {
    this.router.navigate(['/mainscreen/']);
  }

  dischargePatient() {
    const id = this.activateRoute.snapshot.params.id;

    if(this.dues > 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Service Message',
        detail: 'Patient dues are not clear!!!'
      });
    } else {
    this.historyService.addPatientTransactionHistory(id).subscribe(
      success => {
        // console.log(success);
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: 'Patient Discharge Succesful!'
        });
      },
      error => {
        // console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Something went wrong!'
        });
      }
    );
    }
  }
}
