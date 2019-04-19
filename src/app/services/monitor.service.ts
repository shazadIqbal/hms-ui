import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  

  constructor(private http:HttpClient) {
   }

   getPatientMonitor(id):Observable<any>{

   
    return this.http.get(environment.baseUrl+"api/monitor/"+id);

   }

}
