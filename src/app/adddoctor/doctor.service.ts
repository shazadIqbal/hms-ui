import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import {environment} from '../../environments/environment';

@Injectable()
export class DoctorService {

 constructor(private http: HttpClient) {}

  private baseUrl = environment.baseUrl + '/api/doctor/';

  savedoctor(doctor): Observable<any> {
    return this.http.post(this.baseUrl, doctor);
  }
  getdoctors(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
