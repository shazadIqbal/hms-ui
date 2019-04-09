import { ErFacility } from "./../add-er/er-facility";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: "root"
})
export class ErserviceService {

  constructor(private http: HttpClient) {}

  public saveEr(er: Object): Observable<Object> { //postMethod
    return this.http.post(environment.Erurl, er);
  }
  public getEr(): Observable<any> {   //getMethod
    return this.http.get(environment.Erurl);
  }
  public deleteById(no: any): Observable<any> {  //DeletedByID
    return this.http.delete(environment.Erurl + no);
  }
  // ER FACILITY
  public saveErFacility(facility: any): Observable<Object> {  //postFacility
    return this.http.post(environment.Erfacilityurl, facility);
  }
  public getErFacility(): Observable<any> {  //GetFacility
    return this.http.get(environment.Erfacilityurl);
  }
  
}
