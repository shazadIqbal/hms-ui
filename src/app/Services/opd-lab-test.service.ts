import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OpdLabTestService {

  constructor(private http:HttpClient) { }
  
  public saveOpdEr(labtest:any): Observable <any> {
    return this.http.post(environment.baseUrl+"api/opdlabtest/",labtest);
  }

 
}

