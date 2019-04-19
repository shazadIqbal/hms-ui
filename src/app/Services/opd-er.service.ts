import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpdErService {

  constructor(private http:HttpClient) { }
  public saveOpdEr(opdEr:any): Observable <Object> {
    return this.http.post(environment.baseUrl+"opder",opdEr);
  }

  public getOpdEr(): Observable<any> {   // getMethod
    return this.http.get(environment.baseUrl + "opder");
  }
}
