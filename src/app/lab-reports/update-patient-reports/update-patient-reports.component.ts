import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtestServiceService } from 'src/app/add-lab-test/labtest-service.service';
import { MessageService } from 'primeng/api';
import { MonitorService } from 'src/app/services/monitor.service';

@Component({
  selector: 'app-update-patient-reports',
  templateUrl: './update-patient-reports.component.html',
  styleUrls: ['./update-patient-reports.component.css']
})
export class UpdatePatientReportsComponent implements OnInit {

  constructor(private activated: ActivatedRoute, private labtestSerivce: LabtestServiceService, private router: Router, private messageService: MessageService,private patientService:MonitorService) { }

  //Monitor Screen 
  patientId: any;
  //Get Report Id
  reportId: any;

  //Enabling or Disabling fields
  editing: Boolean = false;
  allDetails: any;
  cols: any;
  showPrintButton :Boolean = false;

  // Main report details
  reportName: any;
  patientDetails: any;
  remarksAgainstReport: any;
  generatedReportId: any;


  //patientData
   patientName : any;
   phoneNumber : any;

  //Modal rowData
  display: Boolean = false;

  // Report Details
  subtest: any;
  normal: any;
  unit: any;
  result: any;

  // Print Report Array
  printReport:any = [];

  //Current Id of Selected Report
  currentSelectedId: any;

  ngOnInit() {
    this.fillCols();
    this.catchParams();
    this.getReportAgainstPatientReportId(this.reportId);
    this.populatePatientData();
  
  }

  catchParams() {
    this.patientId = Number(this.activated.snapshot.params.id);
    this.reportId = Number(this.activated.snapshot.params.data);
  
  }

  getReportAgainstPatientReportId(rowData: any) {
    this.patientDetails = [];
    this.labtestSerivce.getReportDetailsByPatientReportId(rowData).subscribe((res => {
      this.patientDetails = [];
      if (res != null) {
        this.allDetails = res;
        console.log(res);
        console.log(this.patientDetails)
        this.reportName = res.labTestName;
        this.remarksAgainstReport = res.remarks;
        this.generatedReportId = res.reportId;

        this.setDataInTableOfReportDetails(res);
      }


    }));
  }


  //BackFunction
  back() {
    history.go(-1);
  }

  //PopulateTable
  setDataInTableOfReportDetails(res: any) {
    this.patientDetails = [];
    res.patientReportDetails.map(d => {
      this.patientDetails.push({
        id: d.id,
        subtest: d.subtest,
        unit: d.unit,
        normal: d.normal,
        result: d.result
      });
    });
  }


  // PatientDetails
    populatePatientData(){
      this.patientService.getPatientMonitor(this.patientId).subscribe(res=>{
        console.log(res);
        this.patientName = res.name;
        this.phoneNumber = res.number;

      })
    }


  //OnRowEdit

  rowEdit(rowData: any) {
    console.log(rowData);
    let findObjectWithIndex = this.patientDetails.find(id => id.id == rowData);
    console.log("hello i am found", findObjectWithIndex);
    this.setCurrentEditRowInModel(findObjectWithIndex);
    this.showDisplayDialog();


  }

  //Set Values in Modal
  setCurrentEditRowInModel(findObjectWithIndex: any) {
    this.currentSelectedId = findObjectWithIndex.id;  //id ki base pr table rowUpdateKaro
    this.subtest = findObjectWithIndex.subtest;
    this.normal = findObjectWithIndex.normal;
    this.unit = findObjectWithIndex.unit;
    this.result = findObjectWithIndex.result;
  }


  //Display Modal 
  showDisplayDialog() {
    this.display = true;
  }



  //OnRow Update
  onRowEditSave(rowData: any) {

    console.log(rowData);
    let index;
    if (rowData != null) {
      index = this.patientDetails.indexOf(this.patientDetails.find(id => id.id == this.currentSelectedId));
      console.log(index);
      rowData['id'] = this.currentSelectedId;
      let storeDuplicateResponse = this.avoidDuplicateRecord(rowData);
      if (storeDuplicateResponse == false) {
        this.patientDetails[index] = rowData;
        console.log(this.patientDetails.find(id => id.id == this.currentSelectedId));
        var res = {};
        res["patientReportDetails"] = this.patientDetails;
        this.setDataInTableOfReportDetails(res);
        this.display = false;
        this.UpdateMethod("RowUpdated")
      }
      else {
        this.display = false;
        this.warningMethod("Duplicate Record Are Not Allowded");
      }

    }
    else {
      this.errorMethod("Something went wrong");
    }



  }

  onRowEditCancel(rowData: any, id: any) {
    console.log(rowData, id);
  }


  fillCols() {
    this.cols = [
      { field: 'subtest', header: 'SUBTESTS' },
      { field: 'normal', header: 'NORMAL VALUES' },
      { field: 'unit', header: 'UNIT VALUES' },
      { field: 'results', header: 'RESULTS' }
    ];
  }

  public avoidDuplicateRecord(rowData: any): Boolean {

    if (rowData != null) {

      let duplicateSubtest = this.patientDetails.find(data => data.subtest == rowData.subtest);
      if (duplicateSubtest != undefined) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  UpdateMethod(msg: String) {
    this.messageService.add({
      severity: 'info',
      summary: msg.toString(),
      detail: 'Sucessfull'
    });
  }



  errorMethod(msg: String) {
    this.messageService.add({
      severity: 'error',
      summary: msg.toString(),
      detail: 'Try Again'
    });
  }

  warningMethod(msg: String) {
    this.messageService.add({
      severity: 'warn',
      summary: msg.toString(),
      detail: 'Try Again'
    });
  }



  saveChanges() {
    // Create an Object first 
    let UpdatedReport = {
      reportId: this.allDetails.reportId,
      labTestName: this.allDetails.labTestName,
      patientId: this.patientId,
      remarks: this.allDetails.remarks,
      patientReportDetails: this.patientDetails

    }
    if (UpdatedReport != undefined) {
      this.printReport = this.patientDetails;
      this.postUpdatedReport(this.reportId, UpdatedReport);
      this.showPrintButton = true;
    }
    

  }

  public postUpdatedReport(id: Number, updatedReport: Object): any {
    this.labtestSerivce.UpdatePatientReport(id, updatedReport).subscribe(res => {
      console.log(res);
      if (res["UPDATED"]) {
        this.UpdateMethod("Patient Report Updated Successfully");
      }
      else {
        this.errorMethod("Can't Updated Patient Report")
      }

    }), error => {
      this.errorMethod("Can't Updated Patient Report")

    }

  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
          </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }


}
