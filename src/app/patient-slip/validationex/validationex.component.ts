import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-validationex',
  templateUrl: './validationex.component.html',
  styleUrls: ['./validationex.component.css'],
  providers: [MessageService]
})
export class ValidationexComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  

  description: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required)
  });


}
}