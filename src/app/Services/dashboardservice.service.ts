import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {
  constructor(private http: HttpClient) {}
  private totalurl = environment.baseUrl + 'api/dashboard/totalamount';
  private duestotalurl = environment.baseUrl + 'api/dashboard/dues';
  private patientsbydateurl = environment.baseUrl + 'api/dashboard/patients';
  private duesbydateurl = environment.baseUrl + 'api/dashboard/duesbydate';
  private totalbydateurl = environment.baseUrl + 'api/dashboard/totalbydate';
  private employeecashflowurl = environment.baseUrl + 'api/dashboard/employeereports';
  private cashFlowHospital = environment.baseUrl+"api/dashboard/hospitalreports";
  private cashflowdoctor=environment.baseUrl+"api/dashboard/doctortransactions";



  public total(dashboard: Object): Observable<any> {
    return this.http.post(this.totalurl, dashboard);
  }
  public totalbydate(dashboard: Object): Observable<any> {
    return this.http.post(this.totalbydateurl, dashboard);
  }

  public duesbydate(dashboard: Object): Observable<any> {
    return this.http.post(this.duesbydateurl, dashboard);
  }
  public duestotal(dashboard: Object): Observable<any> {
    return this.http.post(this.duestotalurl, dashboard);
  }
  public patientsbydate(dashboard: Object): Observable<any> {
    return this.http.post(this.patientsbydateurl, dashboard);
  }

  public postCashFlowOfHospital(cashFlowHospital : Object): Observable<any>{
    return this.http.post(this.cashFlowHospital,cashFlowHospital);
  }

public postCashFlowOfDoctor(cashflowdoctor: Object): Observable<any>{
  return this.http.post(this.cashflowdoctor,cashflowdoctor);
}

  public postEmployeeCashFlow(employeecashflow: Object): Observable<any> {
    return this.http.post(this.employeecashflowurl, employeecashflow);
  }
}
