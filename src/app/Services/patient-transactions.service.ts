import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientTransactionsService {

  constructor(private http: HttpClient) { 

  }
  getPatientTransactions(id): Observable<any> {
    return this.http.get(environment.baseUrl+'api/patienttransactions/'+id);
  }

  deletePatientTransaction(id):Observable<any>
  {
    return this.http.delete(environment.baseUrl+'api/patienttransactions/'+id);
  }
  
}
