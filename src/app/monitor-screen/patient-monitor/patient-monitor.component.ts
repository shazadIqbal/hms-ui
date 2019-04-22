import { Component, OnInit } from '@angular/core';
import {MonitorService} from '../../services/monitor.service'

@Component({
  selector: 'app-patient-monitor',
  templateUrl: './patient-monitor.component.html',
  styleUrls: ['./patient-monitor.component.css']
})
export class PatientMonitorComponent implements OnInit {

  constructor(private patient:MonitorService) { }

  public id;
  public name;
  public number;
  public registration;
  public date;
  public opd;
  public package;
  public total;
  public lab;
  public dues;
  public image;
  public er;
  ngOnInit() {

    this.patient.getPatientMonitor().subscribe((response)=>
    {
      console.log(response)

      this.id=response.id;
      this.name=response.name;
      this.number=response.number;
      this.registration=response.registration;
      this.date=response.date;
      this.opd=response.opd; 
      this.lab=response.lab;
      this.image=response.image;
      this.er=response.er;

      this.dues=response.dues;
      this.package=response.package;
      this.total=response.total;


    },(error)=>{
      console.log(error)
    })
    
  }


}
