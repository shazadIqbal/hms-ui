import { ErFacility } from './../add-er/er-facility';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ErserviceService {

  constructor(private http: HttpClient) {}

// tslint:disable-next-line: ban-types
  public saveEr(er: Object): Observable<Object> { // postMethod
    return this.http.post(environment.baseUrl + 'api/er/', er);
  }
  public getEr(): Observable<any> {   // getMethod
    return this.http.get(environment.baseUrl + 'api/er/');
  }
  public deleteById(no: any): Observable<any> {  // DeletedByID
    return this.http.delete(environment.baseUrl + 'api/er/' + no);
  }
  // ER FACILITY
  public saveErFacility(facility: any): Observable<Object> {  // postFacility
    return this.http.post(environment.baseUrl + '/facility', facility);
  }
  public getErFacility(): Observable<any> {  // GetFacility
    return this.http.get(environment.baseUrl + '/facility');
  }

}
