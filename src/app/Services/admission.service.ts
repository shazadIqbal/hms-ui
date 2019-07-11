import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AdmissionService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: ban-typesp
  public saveAdmission(admission: any): Observable<Object> {
    return this.http.post(environment.baseUrl + "api/bed/", admission);
  }
  public getAvailableBeds(): Observable<any> {
    return this.http.get(environment.baseUrl + "api/bed/");
  }
  public getBedsForSelectBedType(bedType: any): Observable<any>{
    return this.http.get(environment.baseUrl + 'api/bed/selectbedtype/'+bedType)
  }
  public savedOpdAdmit(admit: any): Observable<Object> {
    return this.http.post(environment.baseUrl + "api/opdadmit/", admit);
  }
}
