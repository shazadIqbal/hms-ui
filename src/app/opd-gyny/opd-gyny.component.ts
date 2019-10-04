import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from '../adddoctor/doctor.service';
import { OpdGynyService } from '../Services/opd-gyny.service';
import { opdGynyModel } from './opd-gyny';
import { PatientserviceService } from '../patientservice.service';
import { Package } from '../addpackage/package';
import { PackageServiceService } from '../Services/package-service.service';
import { Gyny } from './gyny';
import { Dropdown } from 'primeng/dropdown';


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
  opdGynyObject : opdGynyModel = new opdGynyModel();
  facilitydrop: SelectItem[];
  //packages: Package = new Package();
  package: Package = new Package();
  gyne : Gyny = new Gyny();
  patientRegistration : any;
  disbaleSubmitButton : boolean = true;


  constructor(
    private router: Router,
    private messageService: MessageService,
    private doctorService: DoctorService,
    private opd_gynyService: OpdGynyService,
    private activatedRoute : ActivatedRoute,
    private patientService: PatientserviceService,
    private packageService: PackageServiceService,

  ) {
    //this.package.pFacility.push({label:'No Package',value:'NOPACKAGE'});

  }

  ngOnInit() {

    this.enable = true;
    this.getDoctorsOption();
    this.getPackage();
    let id=this.activatedRoute.snapshot.params['id'];
    this.opdGynyObject.id = id;
    this.patientService.getPatientsByMRNO(id).subscribe(data => {

      this.patientName = data.name;
      this.patientMrNo = data.id;
      this.patientRegistration = data.gynAndObsRegistration;
      // console.log("this is data ", data);
      // console.log("this is local variable in which data.name is assigned" , this.patientRegistration);

    })


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
        // console.log(data);
        data.forEach(e => {
          // console.log(e)

          // console.log("This is fees of every one"+ e.fees);
          // console.log("This is doctors id "+ e.mrNo);
          this.doctors.push({
            label: e.fullName,
            value: {mrNo:e.mrNo,fullName:e.fullName,fees:e.fees,registration:e.registration}
          });
          console.log({id:this.opdGynyObject.doctors});
        });

      }

    },
    error => {
      // console.log("error agya yar");
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


getPackage(){
  this.opdGynyObject.fees = 0;
  this.facilitydrop=[];
  this.facilitydrop.push({label:'No Package',value:'NOPACKAGE'})
  //this.package.pFacility.push("hello");
  this.gyne.pFacility = "NOPACKAGE";
  this.packageService.getPackages().subscribe(
  data =>{
    // console.log("th",data)
    if(data){
          data.forEach(e=>{
          this.facilitydrop.push({
            label: e.pName+" | "+e.pFacility,
            value: {pName:e.pName,pFacility:e.pFacility,pSponsor:e.pSponsor,pPrice:e.pPrice}
          });
          })
    }

  },error=>{
    // console.log(error);

  });




}

  packageFacilityDropdown(dropdown: Dropdown){
    this.opdGynyObject.fees = 0; //it will also work for the negative
    this.opdGynyObject.total = 0;
    this.opdGynyObject.discount = 0;
    this.opdGynyObject.fees=this.gyne.pFacility["pPrice"];
    // console.log(this.facilitydrop["pPrice"])
    if(this.gyne.pFacility == "NOPACKAGE"){
      // this.opdGynyObject.doctors="no doc"; //console.log();
      dropdown.selectedOption = null;
    }

      this.opdGynyObject.total = this.gyne.pFacility["pPrice"];


    //this.opdGynyObject.fees = this.facilitydrop;
  }



  doctorDropdown() {
    // console.log(this.selectedDoctor);
    // console.log(this.opdGynyObject.doctors["fullName"]);
    //it will also work for the negative
    this.opdGynyObject.total = 0;
    this.opdGynyObject.discount = 0;
    if(this.gyne.pFacility["pFacility"] == undefined){
      this.opdGynyObject.fees = 0;
      this.opdGynyObject.fees = this.opdGynyObject.doctors["fees"]*2;
    }
    // console.log(this.opdGynyObject.fees)
    this.opdGynyObject.total = this.opdGynyObject.fees;
  }

  onGreaterDiscount(){
    if(this.opdGynyObject.discount > this.opdGynyObject.fees || this.opdGynyObject.discount > this.gyne.pFacility["pPrice"] ){
      this.disbaleSubmitButton = false;
    }
    else{
       this.disbaleSubmitButton = true;
    }
  }

  onChangeDiscount(){
    this.onGreaterDiscount();
    // console.log("hello discount")
   let discount = this.opdGynyObject.discount;
   if(discount <= this.opdGynyObject.fees){
    this.opdGynyObject.total = this.opdGynyObject.fees - discount;
   }
   else if(discount <= this.gyne.pFacility["pPrice"]){
    this.opdGynyObject.total = this.gyne.pFacility["pPrice"] - discount;
   }

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
        // console.log(this.opdGynyObject);
        this.messageService.add({
          severity: "success",
          summary: "Succesfully",
          detail: "Added successfully"
        });
        this.enable = false;
      },
      error => {

        // console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      }
    );
    // console.log(this.opdGynyObject);
  }


  //function for totalprice
  getTotal(value: any) {
    this.opdGynyObject.cashRecieved = 0;
    this.opdGynyObject.cashRecieved = value;
    this.opdGynyObject.total = this.opdGynyObject.total;
  }

}
