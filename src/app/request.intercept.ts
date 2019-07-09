import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("hello interceptor");
    const changedReq = req.clone({headers: req.headers.set('Authorization', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzQHMuY29tIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vZGV2Z2xhbi5jb20iLCJpYXQiOjE1NjI2MTE2ODAsImV4cCI6MTU2MjYyOTY4MH0.ByjRSoucLOgqoYbIHGYZudKQnYqfpFqze6AZdI0HQxU')});
    return next.handle(changedReq);
  }
}