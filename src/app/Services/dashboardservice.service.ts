import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  constructor(private http:HttpClient) { }

  private url= environment.baseUrl+"api/dashboard/";
   



  public savedate(dashboard: Object): Observable<Object>{
    return this.http.post(this.url,dashboard);

  }
}
