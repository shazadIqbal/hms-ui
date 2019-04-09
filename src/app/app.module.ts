import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
// import { MrComponentComponent } from './main-screen/mr-component/mr-component.component';
import { AddPanelComponent } from './main-screen/add-panel/add-panel.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ModalComponent } from './modal/modal.component';


import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem, MessageService} from 'primeng/api';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';


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


import {PaginatorModule} from 'primeng/paginator';
import { AddLabTestComponent } from './add-lab-test/add-lab-test.component';
import { AddTestComponent } from './add-lab-test/add-test/add-test.component';
import { AddLabCatComponent } from './add-lab-test/add-lab-cat/add-lab-cat.component';

import { PatientComponent } from './patient/patient.component';
import { PatientformComponent } from './patientform/patientform.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { DoctorService } from './adddoctor/doctor.service';
import { PanelListComponent } from './panel-list/panel-list.component';
import { AddpanellistComponent } from './addpanellist/addpanellist.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { AddpanellistseviceService } from './addpanellist/addpanellistsevice.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { AddAppoinmentListComponent } from './add-appoinment-list/add-appoinment-list.component';
import { ExistingPatientComponent } from './existing-patient/existing-patient.component';

import { AddDirectoryComponent } from './add-directory/add-directory.component';
import { DirectoryFormComponent } from './directory-form/directory-form.component';







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
    // MrComponentComponent,
    AddPanelComponent,
    SearchbarComponent,


  //  PatientSlipComponent, PatientInputComponent, PatientCardComponent, ButtonsComponent, MasterTableComponent, ChildTableComponent, PatientPaymentComponent, TableComponent, DoctorListComponent, AdddoctorComponent, AddLabTestComponent, AddTestComponent, AddLabCatComponent


    ModalComponent, PatientSlipComponent, PatientInputComponent, PatientCardComponent, ButtonsComponent, MasterTableComponent, ChildTableComponent, PatientPaymentComponent, TableComponent, DoctorListComponent, AdddoctorComponent, PanelListComponent, AddpanellistComponent, AddLabTestComponent, AddTestComponent, AddLabCatComponent, PatientComponent, PatientformComponent, AddDirectoryComponent, DirectoryFormComponent,ExistingPatientComponent,AddAppoinmentListComponent


  ],
  imports: [
    BrowserModule, FormsModule,
    ProgressSpinnerModule,
    AppRoutingModule, AccordionModule, ButtonModule, CardModule, TableModule, CalendarModule,
    HttpClientModule,
    HttpClientXsrfModule.disable(),

    BrowserAnimationsModule, TabMenuModule, PanelModule, InputTextModule, DialogModule, ToastModule, ReactiveFormsModule, DropdownModule, InputTextareaModule, MultiSelectModule, ProgressSpinnerModule

  ],
  providers: [DoctorService, AddpanellistseviceService, MessageService],
  bootstrap: [AppComponent],
  exports: [FormsModule],

})
export class AppModule {}
