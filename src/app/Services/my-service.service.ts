import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor() {}
  checkUserandPass(uname: string, pwd: string) {
    if (uname == 'admin' && pwd == 'admin') {
      sessionStorage.setItem('username' , 'admin');
      // localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }
}
