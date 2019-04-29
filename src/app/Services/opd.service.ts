import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpdService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: ban-types
  public saveOPD(opd: any): Observable<Object> { // postMethod
    return this.http.post(environment.baseUrl + 'api/opdconsultancy/',opd);
  }
}
