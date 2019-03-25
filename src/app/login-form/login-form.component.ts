import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [MessageService]

})
export class LoginFormComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  

  ngOnInit() {
  }
click(value:any){

    console.log(value);
  }
  showTopCenter() {
    this.messageService.add({key: 'tc', severity:'warn', summary: 'Info Message', detail:'PrimeNG rocks'});
}


}


