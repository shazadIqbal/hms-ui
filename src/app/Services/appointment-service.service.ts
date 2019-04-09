import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  private url="http://192.168.0.111:8080/api/appoinment/";
  private urlDone="http://192.168.0.111:8080/api/appoinment/complete/";
  private statusUrl = "http://192.168.0.111:8080/api/appoinment/filterbystatus/"
  private dateUrl = "http://192.168.0.111:8080/api/appoinment/filter/"
  constructor(private http: HttpClient) { }

  public saveAppointment(appointment: Object): Observable<Object>{
      return this.http.post(this.url,appointment);

  }

  public getAppointment():Observable<Object>{
    return this.http.get(this.url);
  }

  public deleteById(no:any):Observable<Object>{
    return this.http.delete(this.url+no);
  } 
  public doneById(no:any):Observable<Object>{
    return this.http.patch(this.urlDone+no,null);
  } 

  public saveStatus(status: any): Observable<Object>{
    return this.http.post(this.statusUrl+status,status)
  }
  public getStatus(status: any): Observable<Object>{
    return this.http.get(this.statusUrl+status)
  }

  public saveDate(date: any): Observable<Object>{
    console.log(date);
    return this.http.post(this.dateUrl+date,date);
  }

  public getDate(date: any): Observable<Object>{
    return this.http.get(this.dateUrl+date)
  }
}
