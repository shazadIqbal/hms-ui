import { Component, OnInit } from '@angular/core';
import {MonitorService} from '../../services/monitor.service'
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-patient-monitor',
  templateUrl: './patient-monitor.component.html',
  styleUrls: ['./patient-monitor.component.css']
})
export class PatientMonitorComponent implements OnInit {

  constructor(private patient:MonitorService,private route:Router,private activateRoute:ActivatedRoute) { }

  public id;
  public name;
  public number;
  public registration;
  public date:Date;
  public opd;
  public package;
  public total;
  public lab;
  public dues;
  public image;
  public er;
  ngOnInit() {



    console.log("hello");
    let id=this.activateRoute.snapshot.params['id'];


    this.patient.getPatientMonitor(id).subscribe((response)=>
    {


      if(response.id)
      {
      console.log(response)
      this.id=response.id;
      this.name=response.name;
      this.number=response.number;
      this.registration=response.registration || 'No';
      this.date=response.date;
      this.opd=response.opd;
      this.lab=response.lab;
      this.image=response.image;
      this.er=response.er;
      this.dues=response.dues;
      this.package=response.package || 'No';
      this.total=response.total;
      }
      else
      {
        this.route.navigate(['']);
      }


    },(error)=>{
      console.log(error)
    })

  }

  backToMain()
  {
    this.route.navigate(['']);
  }


}
