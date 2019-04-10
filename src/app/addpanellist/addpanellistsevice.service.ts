import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import{ environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AddpanellistseviceService {
  private url = environment.baseUrl+'/api/panel/';
  private facilityurl =  environment.baseUrl+'/api/panel/panelfacility/';
  
  constructor(private http: HttpClient) {}
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
