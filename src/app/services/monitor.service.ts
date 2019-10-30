import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  patientName:any;
  phoneNumber:any
  constructor(private http:HttpClient) {
   }

    getPatientMonitor(id):Observable<any>{
    return this.http.get(environment.baseUrl+"api/monitor/"+id);
   }

   storePatientData(name,number){
      this.patientName = name;
      this.phoneNumber = number;
      let arr = [];
      arr.push({'pateintName':this.patientName,'phoneNumber':this.phoneNumber});
      // arr.push(this.phoneNumber);
      return arr;
   }

}
