import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from '../adddoctor/doctor.service';
import { OpdGynyService } from '../Services/opd-gyny.service';
import { opdGynyModel } from './opd-gyny';
import { PatientserviceService } from '../patientservice.service';

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
  patientName: String;
  patientMrNo: Number;
  date;
  checked: boolean = false;
  private opdGynyObject : opdGynyModel = new opdGynyModel();


  constructor(
    private router: Router,
    private messageService: MessageService,
    private doctorService: DoctorService,
    private opd_gynyService: OpdGynyService,
    private activatedRoute : ActivatedRoute,
    private patientService: PatientserviceService
    
  ) { 
    

  }

  ngOnInit() {

    this.enable = true;
    this.getDoctorsOption();
    let id=this.activatedRoute.snapshot.params['id'];
    this.opdGynyObject.id = id;
    this.patientService.getPatientsByMRNO(id).subscribe((a) => {
      console.log(a)
      this.patientName = a.name;
      this.patientMrNo = a.id;
    })
    console.log("this is the id in going to model", this.opdGynyObject.id);
  }


  getDoctorsOption() {
    let i = 0;
    this.opdGynyObject.fees = 0;
    this.doctors = [];
    this.doctorService.getdoctors().subscribe(
      data => {

        if(data){
        this.show = false;
        this.checkStatus = false; //this is for form hide property
        console.log(data);
        data.forEach(e => {
          console.log(e)

          console.log("This is fees of every one"+ e.fees);
          console.log("This is doctors id "+ e.mrNo);
          this.doctors.push({
            label: e.fullName,
            value: {mrNo:e.mrNo,fullName:e.fullName,fees:e.fees,registration:e.registration}
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
    this.opdGynyObject.fees = 0; //it will also work for the negative
    this.opdGynyObject.total = 0;
    this.opdGynyObject.discount = 0;
    this.opdGynyObject.fees = this.opdGynyObject.doctors["fees"];
    console.log(this.opdGynyObject.fees)
    this.opdGynyObject.total = this.opdGynyObject.fees;
  }

  onChangeDiscount(){
    console.log("hello discount")
   let discount = this.opdGynyObject.discount/100;
   this.opdGynyObject.total = this.opdGynyObject.fees - (discount * this.opdGynyObject.fees)
  }
  //FUNCTION FOR BACK BUTTON
  backToMonitor() {

    this.router.navigate(['/monitor/'+ this.opdGynyObject.id])
  }
  //FUNCTION FOR SUBMIT OPD CONSULTANCY
  submitOpd() {

    this.date=new Date();
    this.opd_gynyService.saveOpdGyny(this.opdGynyObject).subscribe(
      data => {
        console.log(this.opdGynyObject);
        this.messageService.add({
          severity: "success",
          summary: "Succesfully",
          detail: "Added successfully"
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
