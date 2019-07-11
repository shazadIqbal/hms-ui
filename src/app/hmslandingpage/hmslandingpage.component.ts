import { tokenKey } from "@angular/core/src/view";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../Services/NavBarService';
import { MyServiceService } from '../Services/my-service.service';
import { from } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-hmslandingpage',
  templateUrl: './hmslandingpage.component.html',
  styleUrls: ['./hmslandingpage.component.css'],
  providers: [MyServiceService]
})
export class HmslandingpageComponent implements OnInit {
  constructor(private router: Router, public nav: NavBarService, private messageService: MessageService, private service: MyServiceService) { }
  msg;

  ngOnInit() {
    this.nav.hide();
  }

  check(uname: string, p: string) {
    // var output = this.service.checkUserandPass(uname, p);
    this.service.checkUserandPass(uname, p).subscribe((res) => {
      console.log('toker', res);

      sessionStorage.setItem('token', res.result.token);
      var username = localStorage.setItem('username', res.result.username);
      console.log(username);

      //  sessionStorage.getItem('token');
      // localStorage.setItem('username', 'admin');
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Login Succesful' });
      setTimeout(() => {
        this.router.navigate(['mainscreen']);
      }, 1000);
    }, error => {
      console.log(error);
      this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Wrong username and password' });
    });


    // if(output == true){



  }
  // else{
  //   this.messageService.add({severity:'error', summary:'Service Message', detail:'Invalid Username or Password'});

  // }


  // toMainscreen() {
  //   this.router.navigate(['mainscreen']);
  // }
}
