import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpdConsultancy } from '../opdconsultancy/opdconsultancy';
import { dashboard } from './dashboard';
import { DashboardserviceService } from '../Services/dashboardservice.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboard:dashboard=new dashboard();
  date1=new Date();

  constructor(  private router: Router,private service:DashboardserviceService, private messageservice:MessageService) { 
    
  }

  
  

  ngOnInit() {
  
    this.saveddate();
      


      
    


  }


  
 



  saveddate(){
    let datefrom = this.date1.getFullYear() + "-" + (this.date1.getMonth() + 1) + "-" +(this.date1.getDate()-8) + " " + "00" + ":" + "00" + ":" + "00"; 
    let datetill=  this.date1.getFullYear() + "-" + (this.date1.getMonth() + 1) + "-" +this.date1.getDate() + " " + "23" + ":" + "59" + ":" + "59";
    let newDatefrom = new Date(datefrom);
    let newdatetill= new Date(datetill);
    this.dashboard.from=newDatefrom;
    this.dashboard.till=newdatetill;
    this.service.savedate(this.dashboard).subscribe((data) =>{
      console.log(data);
      this.messageservice.add({severity:'success', summary:'Status', detail:'Successfull'});
    
    }, error=>{
      console.log(error);
      this.messageservice.add({severity:'error', summary:'Status', detail:'Unsuccessfull'});
    })
  }

   onchangedatefrom(){
     


    let changedatefrom=this.dashboard.from.getFullYear() + "-" + (this.dashboard.from.getMonth() + 1) + "-" +this.dashboard.from.getDate() + " " + "00" + ":" + "00" + ":" + "00";

    let newDatefrom = new Date(changedatefrom);
    this.dashboard.from=newDatefrom;
    this.service.savedate(this.dashboard.from).subscribe((data)=>{
      console.log(data);
      this.messageservice.add({severity:'success', summary:'Status', detail:'Successfull'});
    
    }, error=>{
      console.log(error);
      this.messageservice.add({severity:'error', summary:'Status', detail:'Unsuccessfull'});
    })


  

   }

  onchangetilldate(){
    let changedatetill=this.dashboard.till.getFullYear()+":"+ + (this.dashboard.till.getMonth() + 1) + "-" +this.dashboard.till.getDate() + " " + "23" + ":" + "59" + ":" + "59";
    let newDatetill = new Date(changedatetill);
    this.dashboard.till=newDatetill;
    this.service.savedate(this.dashboard.till).subscribe((data)=>{
      console.log(data);
      this.messageservice.add({severity:'success', summary:'Status', detail:'Successfull'});
    
    }, error=>{
      console.log(error);
      this.messageservice.add({severity:'error', summary:'Status', detail:'Unsuccessfull'});
    })


  




  }



  

  


  backToMonitor() {
    this.router.navigate(['mainscreen']);
  }
 

}
