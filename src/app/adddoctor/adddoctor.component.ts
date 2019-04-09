import { Component, OnInit } from '@angular/core';
import {  Doctor } from './doctor';
import { DoctorService } from './doctor.service';

import { error } from '@angular/compiler/src/util';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  doctor:Doctor=new Doctor();

  date8:any;
  gender: SelectItem[];
  date1:any;

  selectedcity1: any;


  constructor(private drservice: DoctorService, private router: Router) {
    this.gender = [

      {label:'male', value:"Male "},
      {label:'female', value:"Female"}


  ];

  }

  ngOnInit() {



  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  save(){
    console.log(this.doctor)
    this.drservice.savedoctor(this.doctor).subscribe(data=>
      console.log(data), error=>console.log(error)

        );
  }

  onclick(){
this.save();

      }

      routePage(){
        this.router.navigate(['doctorlist']);


      }





}
