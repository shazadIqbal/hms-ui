import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSelectBedTypeService {

  constructor(private http:HttpClient) { }
  public getBedsForSelectBedType(bedType: any): Observable<Object>{
    return this.http.get(environment.baseUrl + '/api/bed/selectbedtype/'+bedType)
  }

}
