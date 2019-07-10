import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("hello interceptor");
    const changedReq = req.clone({headers: req.headers.set('Authorization', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY29tIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vZGV2Z2xhbi5jb20iLCJpYXQiOjE1NjI3Njg1ODYsImV4cCI6MTU2Mjc4NjU4Nn0.r8gfWu6uttKgojsTXAIzdM-85m4CkXZk-WdMbn-kM_k')});
    return next.handle(changedReq);
  }
}