import { SelectItem } from 'primeng/api';

export class Patient {
  name: string;
  cnic: string;
  phoneNo: string;
// tslint:disable-next-line: ban-types
  age: Number;
  gender: SelectItem[];
  address: string;
  status: string;
// tslint:disable-next-line: typedef-whitespace
  id : Number;
}
