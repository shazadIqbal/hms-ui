import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../Services/NavBarService';
import { MyServiceService } from '../Services/my-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-hmslandingpage',
  templateUrl: './hmslandingpage.component.html',
  styleUrls: ['./hmslandingpage.component.css'],
  providers: [MyServiceService]
})
export class HmslandingpageComponent implements OnInit {
  constructor(private router: Router, public nav: NavBarService, private service: MyServiceService) {}
  msg;

  ngOnInit() {
    this.nav.hide();
  }

  check(uname: string, p: string){
    var output = this.service.checkUserandPass(uname, p);
    if(output == true){
      this.router.navigate(['mainscreen']);
    }
    else{
      this.msg = 'Invalid username or password';
    }
  }

  // toMainscreen() {
  //   this.router.navigate(['mainscreen']);
  // }
}
