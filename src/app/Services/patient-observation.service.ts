import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientObservationService {
  constructor(private http: HttpClient) {}

  public savePatientObservation(obs: any): Observable<Object> {
    return this.http.post(environment.baseUrl + 'api/opdobservation/', obs);
  }
}
