import { SelectItem } from 'primeng/api';
export class Appointment{
     id: number;
     selectDoctor:SelectItem[];
     appoinmentDate: Date;
     time: String;
     patientName: String;
     phoneNo: String;
} 