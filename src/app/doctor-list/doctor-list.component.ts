import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router, ActivatedRoute } from "@angular/router";
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { DoctorService } from '../adddoctor/doctor.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: any;
  showLoading : boolean;
  cols: any[];

  constructor(private router: Router, private doctorService: DoctorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.showLoading=true;
    this.showTable();
  }

  showTable(){
    this.showLoading = true;
    this.doctorService.getdoctors().subscribe(response => {
      console.log('ye agaya response server se ', response);
      // this.showLoading = false;
       if(response){
         this.showLoading = false;
        this.doctors = response;
       }
      // this.showLoading = true;

    });

    this.cols = [
      { field: 'mrNo', header: 'DOCTOR ID' },
      { field: 'fullName', header: 'FULL NAME' },
      { field: 'gender', header: 'GENDER' },
      { field: 'fees', header: 'FEES' },
      { field: 'mobile', header: 'MOBILE PHONE' },
      { field: 'address', header: 'ADDRESS' }

    ];

    this.doctors = [];
  }

  adddoctor() {
    this.router.navigate(['/adddoctor/']);
  }


  backToMain() {
    this.router.navigate(['mainscreen']);
  }
  editDoctorById(rowData: any) {
    this.router.navigate(['/adddoctor/' + rowData]);
  }
}
