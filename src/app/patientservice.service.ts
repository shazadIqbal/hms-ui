import { Patient } from './patientform/patient';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  constructor(private http: HttpClient) {}
  private baseUrl = `http://192.168.0.111:8080/api/patient/`;

  getPatientsByMRNO(mrNo: number): Observable<any> {
    // const params = new HttpParams().set('id', mrNo.toString()); concatenation & params do the
    // same work
    return this.http.get(this.baseUrl + mrNo);
  }
  // tslint:disable-next-line: ban-types
  postPatient(patient: any): Observable<Object> {
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl, patient, { headers });
  }
  getPatients() {
    return this.http.get(this.baseUrl);
  }
  deletePatientByMRNO(mrNo: number): Observable<any> {

    return this.http.delete(this.baseUrl + mrNo);

  }
}
