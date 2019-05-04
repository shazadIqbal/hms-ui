import { SelectItem } from "primeng/api";

export class OpdPatientAdmit {
  patientID: Number; //id of the patient which uses the bed
  bedType: SelectItem[]; //bedType
  bedID: Number;
  selectedBed: SelectItem[]; //bed given to the patient
  price: Number; //price of the bed
  cashRecieved: Number;
  // isOccupied : boolean;
}

//we created this model so that we can send only those things we need
export class OpdAdmitSend {
  patientID: Number;
  bedID: Number;
  price: Number; //price of the bed
  cashRecieved: Number;
  bedType : SelectItem[];
}
