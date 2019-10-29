import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  constructor(private http: HttpClient) {}

  postSignUpForm(signUpForm: any): Observable<Object> {
    return this.http.post(environment.baseUrl + 'token/user', signUpForm);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(environment.baseUrl + 'token/getusers/');
  }

  public deleteById(id: any): Observable<any> {
    return this.http.delete(environment.baseUrl + 'token/' + id);
  }
}
