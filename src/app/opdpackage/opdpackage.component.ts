import { Component, OnInit } from '@angular/core';
import { Opdpackage } from './opdpackage';
import { SelectItem, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';
import { PackageServiceService } from '../Services/package-service.service';
import { OpdpackageService } from '../Services/opdpackage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-opdpackage',
  templateUrl: './opdpackage.component.html',
  styleUrls: ['./opdpackage.component.css']
})
export class OpdpackageComponent implements OnInit {
  packageName: SelectItem[];
  selectPackage: any;
  packageFacility: any;
  discountCheck = true;
  name: any;
  calDiscount = 0;
  opdObject: Opdpackage = new Opdpackage();
  getStatus: boolean = true;
  checkStatus: boolean = false;
  show: boolean = false;
  enable: boolean;
  patientName: String;
  patientMrNo: Number;
  date;
  editablediscountfield: boolean = false;
  newPackName: String;

  constructor(
    private router: Router,
    private patientService: PatientserviceService,
    private activeRoute: ActivatedRoute,
    private messageservice: MessageService,
    private packageservice: PackageServiceService,
    private opdpackageservice: OpdpackageService,
    private _location: Location
  ) {}

  ngOnInit() {
    this.enable = true;
    this.getPackageOption();
    // console.log(this.opdObject, 'packaaaaaage');

    let id = this.activeRoute.snapshot.params['id'];
    this.patientService.getPatientsByMRNO(id).subscribe(a => {
      // console.log(a);
      this.patientName = a.name;
      this.patientMrNo = a.id;
    });

    this.opdObject.id = id;
    // console.log('this is id' + this.opdObject.id);
  }

  getPackageOption() {
    let i = 0;
    this.opdObject.price = 0;
    this.packageName = [];
    this.packageservice.getPackages().subscribe(
      data => {
        // console.log('dajdnaj', data.pName);
        if (data) {
          this.show = false;
          this.checkStatus = false;
          // console.log("hey ",data[0]);
          data.forEach(e => {
            // console.log(e);
            this.packageName.push({
              label: e.pName + ' / ' + e.pFacility,
              value: {
                pName: e.pName,
                pPrice: e.pPrice,
                sponsor: e.pSponsor,
                pFacility: e.pFacility
              }
              // console.log(e.pName);
            });
            // this.opdObject.packageName = e.pName;
            // console.log('this is package name ' + this.opdObject.packageName);
          });
        }
      },
      error => {
        // console.log('error');
        this.show = true;
        this.checkStatus = true;
        this.messageservice.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }

  packageDropdown() {
    // console.log('Ghuus gye');
    this.date = new Date();
    this.opdObject.price = 0;
    this.opdObject.total = 0;
    this.opdObject.discount = 0;
    this.opdObject.packageFacility = this.opdObject.packageName['pFacility'];
    this.opdObject.price = this.opdObject.packageName['pPrice'];
    this.opdObject.packageName = this.opdObject.packageName['pName'];
    // console.log(this.opdObject.packageName);
    this.opdObject.total = this.opdObject.price + this.opdObject.discount;
  }

  backToMonitor() {
    this._location.back();
  }

  submitPackage() {
    this.date = new Date();
    // console.log(JSON.stringify(this.opdObject));
    this.opdpackageservice.savePackage(this.opdObject).subscribe(
      data => {
        // console.log(data);
        this.messageservice.add({
          severity: 'success',
          summary: 'Succesfully',
          detail: 'Opd Package successfully selected!'
        });
        this.enable = false;
      },
      error => {
        // console.log(error);
        this.messageservice.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
    // console.log(this.opdObject);
  }

  discounter(value) {
    let dis = value;
    this.opdObject.total = this.opdObject.price;
    dis > this.opdObject.total ? (this.discountCheck = false) : (this.discountCheck = true);
    dis ? 0 : dis;
    this.opdObject.discount = dis;
    this.opdObject.total = this.opdObject.total - this.opdObject.discount;
  }

  toaddPackage() {
    this.router.navigate(['/addpackage']);
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }
}
