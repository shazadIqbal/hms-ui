import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { environment } from '../../environments/environment';

@Injectable()
export class DoctorService {

  constructor(private http: HttpClient) { }

  //  '/api/doctor/';

  savedoctor(doctor): Observable<any> {
    return this.http.post(environment.baseUrl + 'api/doctor/', doctor);
  }
  getdoctors(): Observable<any> {
    return this.http.get(environment.baseUrl + 'api/doctor/');
  }
  getDoctorById(mrNo): Observable<any> {
    return this.http.get(environment.baseUrl + 'api/doctor/' + mrNo);
  }

  updateDoctorById(mrNo,oldPhoneNo,doc): Observable<any> {
      return this.http.post(environment.baseUrl +'api/doctor/'+mrNo+'/'+oldPhoneNo,doc);
  }
}
