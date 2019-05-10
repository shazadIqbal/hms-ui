import { DropdownModule } from "primeng/dropdown";

import { AddPanelComponent } from './main-screen/add-panel/add-panel.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ModalComponent } from './modal/modal.component';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

import { PatientSlipComponent } from './patient-slip/patient-slip.component';
import { PatientInputComponent } from './patient-slip/patient-input/patient-input.component';
import { PatientCardComponent } from './patient-slip/patient-card/patient-card.component';
import { ButtonsComponent } from './patient-slip/buttons/buttons.component';
import { MasterTableComponent } from './patient-slip/master-table/master-table.component';
import { ChildTableComponent } from './patient-slip/child-table/child-table.component';
import { PatientPaymentComponent } from './patient-slip/patient-payment/patient-payment.component';
import { TableComponent } from './table/table.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';

import { PaginatorModule } from 'primeng/paginator';
import { AddLabTestComponent } from './add-lab-test/add-lab-test.component';
import { AddTestComponent } from './add-lab-test/add-test/add-test.component';
import { AddLabCatComponent } from './add-lab-test/add-lab-cat/add-lab-cat.component';
import { PatientComponent } from './patient/patient.component';
import { PatientformComponent } from './patientform/patientform.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { DoctorService } from './adddoctor/doctor.service';
import { PanelListComponent } from './panel-list/panel-list.component';
import { AddpanellistComponent } from './addpanellist/addpanellist.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { AddpanellistseviceService } from './addpanellist/addpanellistsevice.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { NavBarService } from './Services/NavBarService';

import { ErComponent } from './er/er.component';
import { AddErComponent } from './add-er/add-er.component';
import { AddDirectoryComponent } from './add-directory/add-directory.component';
import { DirectoryFormComponent } from './directory-form/directory-form.component';
import { MonitorScreenComponent } from './monitor-screen/monitor-screen.component';
import { PatientMonitorComponent } from './monitor-screen/patient-monitor/patient-monitor.component';
import { PatientPanelComponent } from './monitor-screen/patient-panel/patient-panel.component';
import { MrComponentComponent } from './main-screen/mr-component/mr-component.component';
import { AddAppoinmentListComponent } from './add-appoinment-list/add-appoinment-list.component';
import { ExistingPatientComponent } from './existing-patient/existing-patient.component';

import { OpdEmergencyComponent } from './opd-emergency/opd-emergency.component';
import { NgxPrintModule } from 'ngx-print';
import { HmslandingpageComponent } from './hmslandingpage/hmslandingpage.component';
import { AuthGuard } from './auth.guard';
import { AddpackageComponent } from './addpackage/addpackage.component';
import { PackageListComponent } from './package-list/package-list.component';
import { OpdconsultancyComponent } from "./opdconsultancy/opdconsultancy.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NgModule } from '@angular/core';
import { OpdGynyComponent } from './opd-gyny/opd-gyny.component';
import {CheckboxModule} from 'primeng/checkbox';
import { AdmissionComponent } from './admission/admission.component';
import { PatientAdmitComponent } from './patient-admit/patient-admit.component';
import { AdmissionService } from './Services/admission.service';
import { PatientTransactionHistoryComponent } from './patient-transaction-history/patient-transaction-history.component';


import { OpdLabtestComponent } from './opd-labtest/opd-labtest.component';


import { PatientTransactionsComponent } from './patient-transactions/patient-transactions.component';
import { FacilitiesComponent } from './Component/facilities/facilities.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    LoginFormComponent,
    FooterComponent,
    HeaderComponent,
    MainScreenComponent,
    MrComponentComponent,
    AddPanelComponent,
    SearchbarComponent,

    //  PatientSlipComponent, PatientInputComponent, PatientCardComponent, ButtonsComponent, MasterTableComponent, ChildTableComponent, PatientPaymentComponent, TableComponent, DoctorListComponent, AdddoctorComponent, AddLabTestComponent, AddTestComponent, AddLabCatComponent
    ModalComponent,
    PatientSlipComponent,
    PatientInputComponent,
    PatientCardComponent,
    ButtonsComponent,
    MasterTableComponent,
    ChildTableComponent,
    PatientPaymentComponent,
    TableComponent,
    DoctorListComponent,
    AdddoctorComponent,
    PanelListComponent,
    AddpanellistComponent,
    AddLabTestComponent,
    AddTestComponent,
    AddLabCatComponent,
    PatientComponent,
    PatientformComponent,
    AddDirectoryComponent,
    DirectoryFormComponent,
    MonitorScreenComponent,
    PatientMonitorComponent,
    PatientPanelComponent,
    ExistingPatientComponent,
    AddAppoinmentListComponent,
    ErComponent,
    AddErComponent,

    HmslandingpageComponent,
    AddpackageComponent,
    PackageListComponent,
    OpdEmergencyComponent,
    OpdconsultancyComponent,


    PatientTransactionHistoryComponent,
    AdmissionComponent,
    PatientAdmitComponent,
    OpdLabtestComponent,
    PatientTransactionsComponent,
    OpdGynyComponent,
    FacilitiesComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProgressSpinnerModule,
    NgxPrintModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    TableModule,
    CalendarModule,
    HttpClientModule,
    HttpClientXsrfModule.disable(),
    BrowserAnimationsModule,
    TabMenuModule,
    PanelModule,
    InputTextModule,
    DialogModule,
    ToastModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextareaModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    NgxPrintModule,
    CheckboxModule
  ],

  providers: [DoctorService, AddpanellistseviceService, MessageService, NavBarService, AuthGuard, AddErComponent,AdmissionService],

  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
