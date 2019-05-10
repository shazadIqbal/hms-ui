import { Component, OnInit } from '@angular/core';
import {MonitorService} from '../../services/monitor.service'
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PatientTransactionHistoryService} from '../../services/patient-transaction-history.service'
import { identifierName } from '@angular/compiler';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-patient-monitor',
  templateUrl: './patient-monitor.component.html',
  styleUrls: ['./patient-monitor.component.css']
})
export class PatientMonitorComponent implements OnInit {

  constructor(private patient:MonitorService,private messageService: MessageService,private historyService:PatientTransactionHistoryService,private route:Router,private activateRoute:ActivatedRoute) { }

  public id;
  public name;
  public number;
  public registration;
  public date:String;
  public opd;
  public package;
  public total;
  public lab;
  public dues;
  public image;
  public er;
  public isLoading;
  ngOnInit() {



    this.isLoading=true;
    console.log("hello");
    let id=this.activateRoute.snapshot.params['id'];


    this.patient.getPatientMonitor(id).subscribe((response)=>
    {



      if(response.id==id)
      {
        this.isLoading=false;
      console.log(response)
      this.id=response.id;
      this.name=response.name;
      this.number=response.number;
      this.registration=response.registration || 'No';
      this.date= new Date(response.date).toDateString();
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
        this.route.navigate(['/mainscreen']);
      }


    },(error)=>{
      this.isLoading=false;
      console.log(error)
    })

  }

  backToMain()
  {
    this.route.navigate(['/mainscreen']);
  }

  dischargePatient()
  {
    let id=this.activateRoute.snapshot.params['id'];


    this.historyService.addPatientTransactionHistory(id).subscribe((success)=>{
      console.log(success)
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Patient Discharge Succesful!'});
    },(error)=>
    {
      console.log(error)
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Something went wrong!'});
    })
  }


}
