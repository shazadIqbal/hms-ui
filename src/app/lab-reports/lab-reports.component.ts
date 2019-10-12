import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtestServiceService } from '../add-lab-test/labtest-service.service';

@Component({
  selector: 'app-lab-reports',
  templateUrl: './lab-reports.component.html',
  styleUrls: ['./lab-reports.component.css']
})
export class LabReportsComponent implements OnInit {
  reports;
  cols = [];
  id;
  patientId;
  patientReportDetails = [];
  reportId;
  remarks;
  empty :Boolean = false;
  totalRecords;
  userType;
  reportDeatils = [];  //this should be send to child component
  saveWholeReport :any;
  newDetails: any;
  hideProgressBar:Boolean = true;

  constructor(private activated:ActivatedRoute,private labtestSerivce:LabtestServiceService,private router:Router) { }

  ngOnInit() {
    this.hideProgressBar = true;
    this.userType =sessionStorage.getItem('userType').toLocaleUpperCase();
    this.getCols();
    this.activated.params.subscribe(params => {
      this.id = params.id;
    });
    this.getReportAgainstPatientId(this.id);
  }

  backtomain(){
    
    this.router.navigate(['/monitor/'+this.id]);
  }

  getCols(){
    this.cols = [
      { field: 'id', header: 'PATIENT REPORT ID' },
      { field: 'reportName', header: 'Report Name' },
      { field: 'remarks', header: 'Remarks' }
    ];
  }

 getPatientId(){
    this.activated.params.subscribe(params => {
        this.id = params.id ;
        
    });
  }

  getReportAgainstPatientId(value:any){
    this.hideProgressBar  = true;
    this.labtestSerivce.getCompleteProcessReportAgainstPatient(this.id).subscribe((response=>{
      console.log(response);
      this.hideProgressBar = false;
      this.totalRecords = response.bodyList.length;
        this.saveWholeReport = response.bodyList;
        response.bodyList.map(data=>{
            this.patientReportDetails.push({
              id:data.id,
              remarks: data.remarks,
              reportName:data.labTestName
            })
        })


    }),eror=>{
        this.hideProgressBar = false;
      this.empty = true;
    })

  }

// this.id is patient id

  details(reportId:any){
    console.log(reportId);
    localStorage.setItem('reportId',reportId);
    this.router.navigate(['/reportDetails/'+this.id]);
  }
  update(reportId:any,){
    console.log(reportId);
    this.router.navigate(['/updateReport/' + this.id,{data:reportId}]);
  }
}

