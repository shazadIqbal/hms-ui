import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from '../adddoctor/doctor.service';
import { OpdGynyService } from '../Services/opd-gyny.service';
import { opdGynyModel } from './opd-gyny';

@Component({
  selector: 'app-opd-gyny',
  templateUrl: './opd-gyny.component.html',
  styleUrls: ['./opd-gyny.component.css']
})
export class OpdGynyComponent implements OnInit {

  doctors: SelectItem[];
  // selectedDoctor : any;
  calDiscount = 0;
  //object of opd consultancy
 // opdGynyObject: OpdConsultancy = new OpdConsultancy();
  getStatus: boolean = true;
  checkStatus: boolean = false;
  show : boolean = false;
  enable : boolean;
  checked: boolean = false;
  private opdGynyObject : opdGynyModel = new opdGynyModel();


  constructor(
    private router: Router,
    private messageService: MessageService,
    private doctorService: DoctorService,
    private opd_gynyService: OpdGynyService,
    private activatedRoute : ActivatedRoute,
    
  ) { 
    

  }

  ngOnInit() {

    this.enable = true;
    this.getDoctorsOption();
    this.opdGynyObject.id = this.activatedRoute.snapshot.params['id'];
    console.log("this is the id in going to model", this.opdGynyObject.id);
  }


  getDoctorsOption() {
    let i = 0;
    this.opdGynyObject.sallary = 0;
    this.doctors = [];
    this.doctorService.getdoctors().subscribe(
      data => {

        if(data){
        this.show = false;
        this.checkStatus = false; //this is for form hide property
        console.log(data);
        data.forEach(e => {
          console.log(e)
          console.log("This is doctors id "+ e.mrNo);
          this.doctors.push({
            label: e.fullName,
            value: {mrNo:e.mrNo,fullName:e.fullName,sallary:e.sallary}
          });
          // console.log({id:this.opdGynyObject.doctors});
        });

      }

    },
    error => {
      console.log("error agya yar");
      this.show = true;
      this.checkStatus = true;
      this.messageService.add({
        severity: "error",
        summary: "Error Found",
        detail: "Something went wrong check your internet connection "
      });
    }
    );
  }

  doctorDropdown() {
    // console.log(this.selectedDoctor);
    console.log(this.opdGynyObject.doctors["fullName"]);
    this.opdGynyObject.sallary = 0; //it will also work for the negative
    this.opdGynyObject.total = 0;
    this.opdGynyObject.discount = 0;
    this.opdGynyObject.sallary = this.opdGynyObject.doctors["sallary"];
    console.log(this.opdGynyObject.sallary)
    this.opdGynyObject.total = this.opdGynyObject.sallary + this.opdGynyObject.discount;
  }

  //FUNCTION FOR BACK BUTTON
  backToMonitor() {

    this.router.navigate(['/monitor/'+ this.opdGynyObject.id])
  }
  //FUNCTION FOR SUBMIT OPD CONSULTANCY
  submitOpd() {

    this.opd_gynyService.saveOpdGyny(this.opdGynyObject).subscribe(
      data => {
        console.log(this.opdGynyObject);
        this.messageService.add({
          severity: "success",
          summary: "Succesfully"
        });
        this.enable = false;
      },
      error => {

        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      }
    );
    console.log(this.opdGynyObject);
  }

  //function for totalprice
  getTotal(value: any) {
    this.opdGynyObject.cashRecieved = 0;
    console.log(value);
    this.opdGynyObject.discount = 0;
    this.opdGynyObject.cashRecieved = value;
    this.opdGynyObject.total = this.opdGynyObject.total;
  }

}
