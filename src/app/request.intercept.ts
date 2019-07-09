import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("hello interceptor");
    const changedReq = req.clone({headers: req.headers.set('Authorization', sessionStorage.getItem('token'))});
    return next.handle(changedReq);
  }
}