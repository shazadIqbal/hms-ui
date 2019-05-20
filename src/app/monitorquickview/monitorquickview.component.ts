import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../services/monitor.service';
import { MessageService } from 'primeng/api';
import { PatientTransactionHistoryService } from '../services/patient-transaction-history.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monitorquickview',
  templateUrl: './monitorquickview.component.html',
  styleUrls: ['./monitorquickview.component.css']
})
export class MonitorquickviewComponent implements OnInit {

  constructor(private patient:MonitorService,private messageService: MessageService,private historyService:PatientTransactionHistoryService,private route:Router,private activateRoute:ActivatedRoute) { }
  public id;
  public name;
  public number;
  public registration;
  public isLoading;

  ngOnInit() {
    this.isLoading=true;
    console.log("hello");
    let id=this.activateRoute.snapshot.params['id'];

    this.patient.getPatientMonitor(id).subscribe((response)=>
    {



      if(response.id)
      {
        this.isLoading=false;
      console.log(response)
      this.id=response.id;
      this.name=response.name;
      this.number=response.number;
      this.registration=response.gynAndObsRegistration || 'No';

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

}
