import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {
  constructor(private http: HttpClient) {}

  getPackages(): Observable<any> {
    return this.http.get(environment.baseUrl + 'api/addpackage/');
  }

  postPackage(obj): Observable<any> {
    return this.http.post(environment.baseUrl + 'api/addpackage/', obj);
  }

  deletePackage(id): Observable<any> {
    return this.http.delete(environment.baseUrl + 'api/addpackage/' + id);
  }
}
