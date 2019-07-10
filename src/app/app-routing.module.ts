import { PatientPaymentComponent } from "./patient-slip/patient-payment/patient-payment.component";
import { AdmissionComponent } from "./admission/admission.component";
import { AddErComponent } from "./add-er/add-er.component";
import { ErComponent } from "./er/er.component";
import { PatientformComponent } from "./patientform/patientform.component";
import { PatientComponent } from "./patient/patient.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginFormComponent } from "./login-form/login-form.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
// import  { MainScreenComponent } from './main-screen/main-screen.component';
import { MainScreenComponent } from "./main-screen/main-screen.component";
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import { AdddoctorComponent } from "./adddoctor/adddoctor.component";

import { AddLabTestComponent } from "./add-lab-test/add-lab-test.component";
import { AddTestComponent } from "./add-lab-test/add-test/add-test.component";
import { AddLabCatComponent } from "./add-lab-test/add-lab-cat/add-lab-cat.component";

import { PanelListComponent } from "./panel-list/panel-list.component";
import { AddpanellistComponent } from "./addpanellist/addpanellist.component";

import { AddAppoinmentListComponent } from "./add-appoinment-list/add-appoinment-list.component";
import { ExistingPatientComponent } from "./existing-patient/existing-patient.component";
import { AddDirectoryComponent } from "./add-directory/add-directory.component";

import { OpdEmergencyComponent } from "./opd-emergency/opd-emergency.component";
import { DirectoryFormComponent } from "./directory-form/directory-form.component";
import { HmslandingpageComponent } from "./hmslandingpage/hmslandingpage.component";
import { AuthGuard } from "./auth.guard";
import { AddpackageComponent } from "./addpackage/addpackage.component";
import { PackageListComponent } from "./package-list/package-list.component";
// import { MonitorScreenComponent } from './monitor-screen/,monitor-screen.component';
import { OpdconsultancyComponent } from "./opdconsultancy/opdconsultancy.component";
import { MonitorScreenComponent } from "./monitor-screen/monitor-screen.component";
import { PatientObservationComponent } from "./patient-observation/patient-observation.component";
import { from } from "rxjs";

import { OpdGynyComponent } from "./opd-gyny/opd-gyny.component";

import { PatientAdmitComponent } from "./patient-admit/patient-admit.component";

import { PatientTransactionHistoryComponent } from "./patient-transaction-history/patient-transaction-history.component";

import { OpdLabtestComponent } from "./opd-labtest/opd-labtest.component";
import { PatientTransactionsComponent } from "./patient-transactions/patient-transactions.component";
import { GynyObsListComponent } from "./gyny-obs-list/gyny-obs-list.component";
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
// import { NewcompComponent } from "./newcomp/newcomp.component";

const routes: Routes = [
  { path: "", component: HmslandingpageComponent },
  {
    path: "doctorlist",
    canActivate: [AuthGuard],
    component: DoctorListComponent
  },
  {
    path: "contact",
    canActivate: [AuthGuard],
    component: ContactPageComponent
  },
  {
    path: "adddoctor",
    canActivate: [AuthGuard],
    component: AdddoctorComponent
  },
  {
    path: "panellist",
    canActivate: [AuthGuard],
    component: PanelListComponent
  },
  {
    path: "addpanellist",
    canActivate: [AuthGuard],
    component: AddpanellistComponent
  },
  {
    path: "mainscreen",
    canActivate: [AuthGuard],
    component: MainScreenComponent
  },
  {
    path: "addpackage",
    canActivate: [AuthGuard],
    component: AddpackageComponent
  },
  {
    path: "packagelist",
    canActivate: [AuthGuard],
    component: PackageListComponent
  },
  {
    path: "addlabtest",
    canActivate: [AuthGuard],
    component: AddLabTestComponent
  },
  { path: "addlab", canActivate: [AuthGuard], component: AddTestComponent },
  {
    path: "addlabcat",
    canActivate: [AuthGuard],
    component: AddLabCatComponent
  },
  { path: "patient", canActivate: [AuthGuard], component: PatientComponent },
  {
    path: "patientform",
    canActivate: [AuthGuard],
    component: PatientformComponent
  },
  {
    path: "monitor/:id",
    canActivate: [AuthGuard],
    component: MonitorScreenComponent
  },
  {
    path: "adddirectory",
    canActivate: [AuthGuard],
    component: AddDirectoryComponent
  },
  {
    path: "directoryform",
    canActivate: [AuthGuard],
    component: DirectoryFormComponent
  },
  { path: "er", canActivate: [AuthGuard], component: ErComponent },
  { path: "adder", canActivate: [AuthGuard], component: AddErComponent },
  {
    path: "appoinmentList",
    canActivate: [AuthGuard],
    component: AddAppoinmentListComponent
  },
  {
    path: "existingPatient",
    canActivate: [AuthGuard],
    component: ExistingPatientComponent
  },

  {
    path: "patientobservation/:id",
    canActivate: [AuthGuard],
    component: PatientObservationComponent
  },
  { path: "opdEmergency/:id", canActivate: [AuthGuard], component: OpdEmergencyComponent },
  { path: "opdconsultancy/:id", canActivate: [AuthGuard], component: OpdconsultancyComponent },
  { path: "history/:id", canActivate: [AuthGuard], component: PatientTransactionHistoryComponent },
  { path: "opdGyny/:id", canActivate: [AuthGuard], component: OpdGynyComponent },
  { path: "opdlabtest/:id", canActivate: [AuthGuard], component: OpdLabtestComponent },
  { path: "patienttransactions/:id", canActivate: [AuthGuard], component: PatientTransactionsComponent },
  {
    path: "admission",
    canActivate: [AuthGuard],
    component: AdmissionComponent
  }, //Create New Bed Component
  {
    path: "patientadmit/:id",
    canActivate: [AuthGuard],
    component: PatientAdmitComponent
  },
  { path: "gynObsList/:id", canActivate: [AuthGuard], component: GynyObsListComponent },
  { path: "gynObsList", canActivate: [AuthGuard], component: GynyObsListComponent },
  { path: "patientFormWithId/:id", canActivate: [AuthGuard], component: PatientformComponent },

  {
    path: "patientadmit/:id",
    canActivate: [AuthGuard],
    component: PatientAdmitComponent
  },
  {
    path: "adddoctor/:id",
    canActivate: [AuthGuard],
    component: AdddoctorComponent
  },//{ path: '**', canActivate: [AuthGuard], component: PatientPaymentComponent },
  {
    path:"signupform",
    canActivate:[AuthGuard],
    component: SignUpFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
