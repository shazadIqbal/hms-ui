import { AddErComponent } from "./add-er/add-er.component";
import { ErComponent } from "./er/er.component";
import { PatientformComponent } from './patientform/patientform.component';
import { PatientComponent } from './patient/patient.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
//import  { MainScreenComponent } from './main-screen/main-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';

import { AddLabTestComponent } from './add-lab-test/add-lab-test.component';
import { AddTestComponent } from './add-lab-test/add-test/add-test.component';
import { AddLabCatComponent } from './add-lab-test/add-lab-cat/add-lab-cat.component';

import { PanelListComponent } from './panel-list/panel-list.component';
import { AddpanellistComponent } from './addpanellist/addpanellist.component';


const routes: Routes = [



{path: '', component: MainScreenComponent},
{path: 'doctorlist', component: DoctorListComponent},
{path: 'contact', component: ContactPageComponent},
{path: 'adddoctor', component: AdddoctorComponent},
{path: 'panellist', component: PanelListComponent},
{path: 'addpanellist', component: AddpanellistComponent},
{path: 'mainscreen' , component: MainScreenComponent},
{ path: 'addlabtest', component: AddLabTestComponent },
{ path: 'addlab', component: AddTestComponent },
{ path: 'addlabcat', component: AddLabCatComponent },
{path: 'patient', component: PatientComponent},
{path: 'patientform', component: PatientformComponent},
{path: 'er', component: ErComponent},
{path: 'adder', component: AddErComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
