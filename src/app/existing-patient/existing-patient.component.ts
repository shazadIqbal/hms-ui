import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from './Appointment';
import { AppointmentServiceService } from '../Services/appointment-service.service';
import {MessageService, SelectItem } from 'primeng/api';
import { formatDate, DatePipe } from "@angular/common";
import {DoctorService} from '../adddoctor/doctor.service'; 


@Component({
  selector: 'app-existing-patient',
  templateUrl: './existing-patient.component.html',
  styleUrls: ['./existing-patient.component.css']
})
export class ExistingPatientComponent implements OnInit {
  
  appointments : Appointment = new Appointment();
  _selectDoctor : SelectItem[] = [];
  appointmentTime:Date;
  appointmentDateTs : Date;
  constructor(private router : Router,private _appointmentService: AppointmentServiceService,private messageService: MessageService,private _doctorService: DoctorService) { 

   
  }

  ngOnInit() {
    // console.log("Hello")
    this.getDoctorsInDropdown()
  }
  
  getDoctorsInDropdown(){
    //this.selectDoctor=[];
    this._doctorService.getdoctors().subscribe((Response)=>{
      // console.log("response is here",Response);
   
       Response.forEach(e => {
         this._selectDoctor.push({
           label: e.fullName,
           value: e.fullName
         })
       }); 
      
    })

  }
  _saveAppointment( ){
 
    
   // this.appointmentDate=this.appointments.time;
    this.appointments.time=this.appointmentTime.toLocaleTimeString();
   // this.appointmentDateTs = this.appointments.appoinmentDate;
   // this.appointments.appoinmentDate =  this.appointmentDateTs.toLocaleDateString();
    // console.log(this.appointments)
  //  console.log(this.appointments.time);
    this._appointmentService.saveAppointment(this.appointments).subscribe((data) =>{
      // console.log(data);
      this.messageService.add({severity:'success', summary:'Status', detail:'Successfull'});
    
    }, error=>{
      // console.log(error);
      this.messageService.add({severity:'error', summary:'Status', detail:'Unsuccessfull'});
    })
  }
  Onsubmit(value:any){
    // console.log(value);
    this._saveAppointment();
  }
  addPanelList(){
    this.router.navigate(['/appoinmentList']);
  }

  OnChangeInDoctors(){
    this.getDoctorsInDropdown();
  }
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
 