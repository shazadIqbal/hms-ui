import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddpanellistseviceService {
  private url = "http://192.168.0.122:8080/api/panel/";
  private facilityurl = "http://192.168.0.122:8080/api/panel/panelfacility/";
  
  constructor(private http:HttpClient) {}
  public savePanel(panel: Object): Observable<Object>{
    return this.http.post(`${this.url}`,panel);
      }
  public getPanel(): Observable<any>{
        return this.http.get(`${this.url}`);
          }
  public deleteById(no:any): Observable<any>{
    
      return this.http.delete(this.url+no);
  } 
  public saveFacility(facility: any): Observable<Object>{
    
    return this.http.post(`${this.facilityurl}`,facility);
      }
      public getFacility(): Observable<any>{
        return this.http.get(`${this.facilityurl}`);
          }
}
