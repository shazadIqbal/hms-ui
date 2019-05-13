import { SelectItem } from 'primeng/api';

export class Patient {
  name: string;
  cnic: string;
  phoneNo: string;
  age: Number;
  gender: SelectItem[];
  address: string;
  status: string;
  id : Number;
  gynAndObsRegistration: Boolean;
  husbandOfAndFatherOf: string;
  registrationDate : Date;
}

