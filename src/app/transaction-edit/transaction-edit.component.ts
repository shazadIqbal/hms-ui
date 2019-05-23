import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {

  constructor() { }
  display = false;

  @Input() transactionId;
  @Input() receivedAmount;
  @Input() dues;

  btnDisabler:Boolean=false;
  duesCpy;
  receivedAmountCpy;


  ngOnInit() {
    this.duesCpy=this.dues;
    this.receivedAmountCpy=this.receivedAmount;
  }


  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  showDialog()
  {
    this.display=true;
  console.log(this.transactionId)
  this.receivedAmount=this.receivedAmountCpy;
  this.dues=this.duesCpy;
  console.log("dues======>>>>",this.dues)
  console.log("received====>>>>",this.receivedAmount)
  }

  onDuesChange()
  {
    console.log("received====>>>>",this.dues)
    this.btnDisabler= this.dues>this.duesCpy?true:false;

     //if dues are set to null then it must be assigned to 0,NAN
    this.dues= this.dues?this.dues:0;

    //dues difference from before

    let diff= parseInt(this.duesCpy)-parseInt(this.dues);

   //adding the difference to the received amount
    this.receivedAmount=parseInt(this.receivedAmountCpy) + diff;

   

    





    

    

  }

}
