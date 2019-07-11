import { Router } from '@angular/router';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { tokenKey } from '@angular/core/src/view';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
// tslint:disable-next-line: ban-types
  isHide: Boolean = true;
  userName:String;
  item = sessionStorage.getItem('token');
  constructor(private router: Router) {}

// tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck() {
    console.log('Ng Do Check  is Checking the availability of the token');
    const token = sessionStorage.getItem('token');
     this.userName = localStorage.getItem('username');
     console.log("uname",this.userName);

    if (token != null) {
     setTimeout(() => {

       this.isHide = true;
     }, 1000);
    } else {
      this.isHide = false;
    }
  }

  ngOnInit() {
    // sessionStorage.removeItem("token");
    if (this.item != null) {
      this.isHide = true;
    } else {
      this.isHide = false;
    }
  }
  clearCache() {
    sessionStorage.removeItem('token');
    console.log(sessionStorage.getItem('token'));
    this.isHide = false;
    this.router.navigate(['']);
  }
}
