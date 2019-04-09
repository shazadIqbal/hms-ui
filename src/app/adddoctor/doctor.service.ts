import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import {environment} from '../../environments/environment';

@Injectable()
export class DoctorService {

  private baseUrl = environment.baseUrl + '/api/doctor/';


 constructor(private http: HttpClient) {}

  savedoctor(doctor): Observable<any> {
    return this.http.post(this.baseUrl, doctor);
  }
  getdoctors(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
