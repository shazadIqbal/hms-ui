import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientTransactionHistoryService {

  constructor(private http: HttpClient) { }

  getPatientTransactionHistory(id): Observable<any> {
    return this.http.get(environment.baseUrl+'api/gethistory/'+id);
  }

  addPatientTransactionHistory(id): Observable<any> {
    return this.http.get(environment.baseUrl+'api/addhistory/'+id);
  }
}
