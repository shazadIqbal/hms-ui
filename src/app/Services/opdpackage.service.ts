import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Opdpackage } from '../opdpackage/opdpackage';

@Injectable({
  providedIn: 'root'
})
export class OpdpackageService {
  constructor(private http: HttpClient) {}

  public savePackage(opdpackage: any): Observable<Object> {
    return this.http.post(environment.baseUrl+'api/opdpackage/', opdpackage);
  }
}
