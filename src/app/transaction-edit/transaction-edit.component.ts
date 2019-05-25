import { Component, OnInit, Input } from '@angular/core';
import { PatientTransactionsService } from '../services/patient-transactions.service';
import { PatientTransactionsComponent } from '../patient-transactions/patient-transactions.component'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {

  constructor(private messageService: MessageService, private patientService: PatientTransactionsService, private patientTransactionCompo: PatientTransactionsComponent) { }
  display = false;

  @Input() transactionId;
  @Input() receivedAmount;
  @Input() dues;
  @Input() data;

  btnDisabler: Boolean = false;
  duesCpy: any;
  receivedAmountCpy: any;
  record: any;


  ngOnInit() {
    this.duesCpy = this.dues;
    this.receivedAmountCpy = this.receivedAmount;


  }


  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  showDialog() {
    this.display = true;

    this.record = this.data.find((value) => {
      return value.id == this.transactionId;
    })

    console.log("recoooooooooooord", this.record)

    console.log(this.transactionId)
    this.receivedAmount = this.receivedAmountCpy;
    this.dues = this.duesCpy;
    console.log("dues======>>>>", this.dues)
    console.log("received====>>>>", this.receivedAmount)
  }

  onDuesChange() {
    console.log("received====>>>>", this.dues)

    //disabling update button if dues are increased
    this.btnDisabler = this.dues > this.duesCpy ? true : false;

    //if dues are set to null then it must be assigned to 0,NAN
    this.dues = this.dues ? this.dues : 0;

    //dues difference from before

    let diff = parseInt(this.duesCpy) - parseInt(this.dues);

    //adding the difference to the received amount
    this.receivedAmount = parseInt(this.receivedAmountCpy) + diff;


  }



  updateRecord() {

    this.record.dues = parseInt(this.dues);
    this.record.receivedAmount = parseInt(this.receivedAmount);
    console.log(this.record, "recoooooooooooooooooooooooor")
    this.patientService.updatePatientTransactionById(this.transactionId, this.record)
      .subscribe((response) => {


        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: response.message });

        console.log("patient updated successfully", response);
        this.display = false;
        this.patientTransactionCompo.showTable();
      }, (error) => {
          this.messageService.add({ severity: 'error', summary: 'Service Message', detail: error });
        }
      )

  }

}
