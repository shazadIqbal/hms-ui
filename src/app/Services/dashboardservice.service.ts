import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  constructor(private http:HttpClient) { }

  private totalurl= environment.baseUrl+"api/dashboard/totalamount";
  private duestotalurl=environment.baseUrl+"api/dashboard/dues";
  private patientsbydateurl=environment.baseUrl+"api/dashboard/patients";
  private duesbydateurl=environment.baseUrl+"api/dashboard/duesbydate";
  private totalbydateurl=environment.baseUrl+"api/dashboard/totalbydate";



  public total(dashboard: Object): Observable<any>{
    return this.http.post(this.totalurl,dashboard);
    

  }
  public totalbydate(dashboard: Object): Observable<any>{
    return this.http.post(this.totalbydateurl,dashboard);
 
  }

  public duesbydate(dashboard: Object): Observable<any>{
    return this.http.post(this.duesbydateurl,dashboard);
 
  }
  public duestotal(dashboard: Object): Observable<any>{
    return this.http.post(this.duestotalurl,dashboard);
 
  }
  public patientsbydate(dashboard: Object): Observable<any>{
    return this.http.post(this.patientsbydateurl,dashboard);
 
  }



}
