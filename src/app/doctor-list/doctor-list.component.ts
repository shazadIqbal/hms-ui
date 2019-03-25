import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { DoctorService } from '../adddoctor/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

 doctors:any;

cols: any[];


  
  constructor(private router : Router, private doctorService:DoctorService) { }

  ngOnInit() {
    
    this.doctorService.getdoctors().subscribe((response)=>{
        console.log("ye agaya response server se ",response);
        this.doctors = response;
    })


    this.cols = [
      { field: 'fullName', header: 'Full Name' },
      {field: 'gender', header: 'Gender' },
      {field: 'cnic', header: 'CNIC' },
      {field: 'address', header: 'address' },
      

     
  ];
    
  this.doctors= [
    
];
        

      
    }

    adddoctor() {

      this.router.navigate(['/adddoctor']);
    }
    
  }

  

