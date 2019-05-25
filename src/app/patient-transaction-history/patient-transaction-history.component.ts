import { Component, OnInit } from '@angular/core';
import {PatientTransactionHistoryService} from '../services/patient-transaction-history.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-patient-transaction-history',
  templateUrl: './patient-transaction-history.component.html',
  styleUrls: ['./patient-transaction-history.component.css']
})
export class PatientTransactionHistoryComponent implements OnInit {

  transaction: any[];
  totalRecords = 0;
  datasource: any = [];
  cols: any[];

  constructor(private history:PatientTransactionHistoryService,private route:Router,private activateRoute:ActivatedRoute) {

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'transactionDate', header: 'Transaction Date' },
      { field: 'receivedAmount', header: 'Received Amount' },
      { field: 'totalAmount', header: 'Total Amount' },
      { field: 'transactionType', header: 'Transaction Type' },
      { field: 'description', header: 'Description' },
      { field: 'currency', header: 'Currency' },
      { field: 'operationType', header: 'Operation Type' },
      { field: 'dues', header: 'Dues' }
    ];
  }

  ngOnInit() {

    this.showTable();
  }

  back()
  {
    let id=this.activateRoute.snapshot.params['id'];
    this.route.navigate(['/monitor/'+id])
  }

  showTable() {
    this.transaction = [];
    //this.loading = true;
    this.totalRecords = 0;
    let id=this.activateRoute.snapshot.params['id'];
    this.history.getPatientTransactionHistory(id).subscribe(data=>{
      console.log("response is here",data);
      this.datasource = [];
      this.datasource = data;
      this.totalRecords = this.datasource.length;
      this.transaction = data;

    });

  }
  // Zamar did'nt create the fucntion for delete
  inactive(value:any){
    console.log(value);
  }


}


