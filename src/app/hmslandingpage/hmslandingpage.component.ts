import { tokenKey } from '@angular/core/src/view';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../Services/NavBarService';
import { MyServiceService } from '../Services/my-service.service';
import { from } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

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
  token;
  userName;
  userType;
  getType
  msg;
  deleteAllHistory;
  labUrl;
  opdUrl;
  pharmacyUrl;
  showErrorMessage : Boolean = false;
  ngOnInit() {
    this.nav.hide();
    this.deleteAllHistory = this._location.isCurrentPathEqualTo('opd');
    
    this.labUrl = environment.labUrl;
    this.opdUrl = environment.opdUrl;
    this.pharmacyUrl = environment.pharmacyUrl;
    
  }

  check(uname: string, p: string) {
    // var output = this.service.checkUserandPass(uname, p);
    this.service.checkUserandPass(uname, p).subscribe(
      res => {
        console.log('toker', res);
        var getType = res.result.userType.toUpperCase();
        if (getType == "LAB" || getType == "PHARMACY") {
          this.errorMethod("Unauthorized for OPD application")
          this.showErrorMessage = true;
        }
        else if (getType = "ADMIN" || getType=="OPD") {
          this.credentials(res);
          this.succesMethod();
          this.showErrorMessage = false;
          this.goToOpd();
        }
        else {
          this.showErrorMessage = true;
          this.errorMethod("Not Authorized");
        }
      },
      error => {
        console.log(error);
        this.showErrorMessage = true;
        this.errorMethod("Not Authorized")
      }
    );
  }


  credentials(res) {
    sessionStorage.setItem('token', res.result.token);
    this.userName = sessionStorage.setItem('username', res.result.username);
    this.userType = sessionStorage.setItem('userType', res.result.userType);
    this.getType = sessionStorage.getItem('userType').toUpperCase();

  }

  succesMethod() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Login Succesful'
    });
  }



  errorMethod(msg: String) {
    this.messageService.add({
      severity: 'error',
      summary: msg.toString(),
      detail: 'retry login'
    });
  }


  goToOpd() {
    setTimeout(() => {
      this.router.navigate(['/mainscreen'])
    }, 1000);
  }

  // goToPharmacy() {
  //   setTimeout(() => {
  //     window.location.href = "http://localhost:8081/sales"
  //   }, 1000);
  // }
  // goToLab() {
  //   setTimeout(() => {
  //     window.location.href = "http://localhost:8082/showOrProcessReports"
  //   }, 1000);
  // }

}




