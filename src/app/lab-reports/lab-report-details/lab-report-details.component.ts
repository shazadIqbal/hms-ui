import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LabtestServiceService } from 'src/app/add-lab-test/labtest-service.service';

@Component({
  selector: 'app-lab-report-details',
  templateUrl: './lab-report-details.component.html',
  styleUrls: ['./lab-report-details.component.css']
})
export class LabReportDetailsComponent implements OnInit {
  cols: any;
  reportDetails :any= [];
  reportName : any;
  remarksAgainstReport:any;
  generatedReportId:any;
  
  // @Input() patientReportDetails: any;
  constructor(private labService: LabtestServiceService) { }

  ngOnInit() {
    this.fillCols();
    let id = parseInt(localStorage.getItem('reportId'));
    if(id!=null){
      this.labService.getReportDetailsByPatientReportId(id).subscribe(res => {
        console.log("yeh raha mein", res);

        this.reportName = res.labTestName;
        this.remarksAgainstReport = res.remarks;
        this.generatedReportId = res.reportId;

        res.patientReportDetails.map(d => {
          this.reportDetails.push({
            subtest: d.subtest,
            unit: d.unit,
            normal: d.normal,
            result: d.result
          });
        })
      })
      console.log("yeh rhy details", this.reportDetails)
    }
    else{
      this.reportName = "No name defined"
      this.remarksAgainstReport ="No Remarks Found"
      this.generatedReportId = null;
      console.log("do nothing")
    }
    
  }


  back() {
    history.go(-1);
  }

  fillCols() {
    this.cols = [
      { field: 'subtest', header: 'SUBTESTS' },
      { field: 'normal', header: 'NORMAL VALUES' },
      { field: 'unit', header: 'UNIT VALUES' },
      { field: 'results', header: 'RESULTS' }
    ];
  }

}
