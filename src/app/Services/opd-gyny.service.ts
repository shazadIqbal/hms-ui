import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpdGynyService {

  constructor(private http: HttpClient) {}

  //method for posting opd service

  public saveOpdGyny(opdGyny : any):Observable<Object>{
    return this.http.post(environment.baseUrl + 'api/opdGyny/',opdGyny)
  }
    
  
}
