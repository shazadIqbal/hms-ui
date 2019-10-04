import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activated:ActivatedRoute,private labtestSerivce:LabtestServiceService) { }

  ngOnInit() {
   this.getCols();
    this.activated.params.subscribe(params => {
      this.id = params.id;

    });
    this.getReportAgainstPatientId(this.id);
  }

  backtomain(){
    history.go(-1);
  }

  getCols(){
    this.cols = [
      { field: 'id', header: 'REPORT ID' },
      { field: 'subtest', header: 'SUBTESTS' },
      { field: 'unit', header: 'UNIT VALUES' },
      { field: 'normal', header: 'NORMAL VALUES' },
      { field: 'result', header: 'RESULT' },
      
    ];
  }

 getPatientId(){
    this.activated.params.subscribe(params => {
        this.id = params.id ;
        
    });
  }

  getReportAgainstPatientId(value:any){
    this.labtestSerivce.getCompleteProcessReportAgainstPatient(this.id).subscribe((response=>{
        // console.log(response)
        
        this.reportId  = response.id;
        this.patientId = response.id;
        this.remarks = response.remarks;
        const  data = response.map(({ patientReportDetails }) => patientReportDetails);
        // console.log(data)
        this.patientReportDetails.push(data);
        this.totalRecords = this.patientReportDetails.length;
        // console.log("Hey  ",this.patientReportDetails)


    }),eror=>{
      this.empty = true;
    })

  }
}
