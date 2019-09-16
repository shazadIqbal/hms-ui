import { tokenKey } from '@angular/core/src/view';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../Services/NavBarService';
import { MyServiceService } from '../Services/my-service.service';
import { from } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hmslandingpage',
  templateUrl: './hmslandingpage.component.html',
  styleUrls: ['./hmslandingpage.component.css'],
  providers: [MyServiceService]
})
export class HmslandingpageComponent implements OnInit {
  constructor(
    private router: Router,
    public nav: NavBarService,
    private messageService: MessageService,
    private service: MyServiceService,
    private _location: Location
  ) { }
  msg;
  deleteAllHistory;
  ngOnInit() {
    this.nav.hide();
    this.deleteAllHistory = this._location.isCurrentPathEqualTo('mainscreen');
  }

  check(uname: string, p: string) {
    // var output = this.service.checkUserandPass(uname, p);
    this.service.checkUserandPass(uname, p).subscribe(
      res => {
        console.log('toker', res);

        sessionStorage.setItem('token', res.result.token);
        var username = sessionStorage.setItem('username', res.result.username);
        var userType = sessionStorage.setItem('userType', res.result.userType);
        var getType = sessionStorage.getItem('userType').toUpperCase();

        switch (getType) {
          case "LAB":
            this.succesMethod();
            this.goToLabApplication()
            break;
          case "ADMIN":
            this.succesMethod();
            this.goToOpd();
            break;
          case "USER":
            this.succesMethod();
            this.goToPharmacy()
            break;

        }

      },
      error => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Wrong username and password'
        });
      }
    );
  }

  succesMethod() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Login Succesful'
    });
  }


  goToLabApplication() {
    setTimeout(() => {
      window.location.href = "http://localhost:4201/";
    }, 1000);
  }
  goToOpd() {
    setTimeout(() => {
      this.router.navigate(['mainscreen'])
    }, 1000);
  }

  goToPharmacy() {
    setTimeout(() => {
      window.location.href = "http://localhost:4202/"
    }, 1000);
  }

}




