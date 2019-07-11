import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  // this prevents from getting into another url without login
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('token') != null) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
