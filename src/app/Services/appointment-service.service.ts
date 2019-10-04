import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  private url= environment.baseUrl+"api/appoinment/";
  private urlDone= environment.baseUrl+"api/appoinment/complete/";
  private statusUrl = environment.baseUrl+"api/appoinment/filterbystatus/"
  private dateUrl = environment.baseUrl+"api/appoinment/filter/"
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
    // console.log(date);
    return this.http.post(this.dateUrl+date,date);
  }

  public getDate(date: any): Observable<Object>{
    return this.http.get(this.dateUrl+date)
  }
}
