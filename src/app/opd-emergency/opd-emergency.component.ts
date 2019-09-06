import { Component, OnInit } from '@angular/core';
import { AddErComponent } from '../add-er/add-er.component';
import { AddEmergency } from '../add-er/Add-er';
import { Router, ActivatedRoute } from '@angular/router';
import { ErserviceService } from '../Services/erservice.service';
import { SelectItem, MessageService } from 'primeng/api';
import { _EmergencyClass } from './Emergency';
import { Key } from 'protractor';
import { PatientserviceService } from '../patientservice.service';
import { OpdErService } from '../Services/opd-er.service';

@Component({
  selector: 'app-opd-emergency',
  templateUrl: './opd-emergency.component.html',
  styleUrls: ['./opd-emergency.component.css']
})
export class OpdEmergencyComponent implements OnInit {
  multiDropdown: SelectItem[];
  hidder = false;
  addEmergency: _EmergencyClass = new _EmergencyClass();
  name: string[];
  printFacilities = [];
  showprint: boolean = true;
  getStatus: boolean = true;
  getIdWhenStatus_200: any;
  showLoading = true;
  discountCheck = true;
  show = false;
  cols: any;
  printer = true;
  showspinloading = true;
  showspinLoadingMessage = 'Loading';
  facilitiesArray = [];
  patientName: String;
  patientMrNo: Number;
  date;
  discount = 0;
  total = 0;
  // id: number;

  // printStatus : boolean;
  //

  constructor(
    private patientService: PatientserviceService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private erService: ErserviceService,
    private opdEr: OpdErService,
    private messageService: MessageService
  ) {}

  print() {
    this.facilitiesArray = [];
    this.addEmergency.discount = 0;
    this.addEmergency.cashRecieve = 0;
    this.addEmergency.total = 0;
    this.addEmergency.price = 0;
    this.addEmergency.facilities = [];
  }
  ngOnInit() {
    console.log(this.date);
    this.getfacilitiesInDropdown();
    // if(this.multiDropdown == []){
    //   this.show = true;
    //   this.showLoading = true;
    // }
    //this.showLoading=true
    this.cols = [{ field: 'name', header: 'Facility' }, { field: 'price', header: 'Price' }];
    let id = this.activeRoute.snapshot.params['id'];
    this.addEmergency.id = id;
    this.addEmergency.price = 0;

    this.patientService.getPatientsByMRNO(id).subscribe(a => {
      console.log(a);
      this.patientName = a.name;
      this.patientMrNo = a.id;
    });
  }

  back() {
    this.router.navigate(['/monitor/' + this.addEmergency.id]);
  }

  showLoadingSpinnerAndHideForm(msg) {
    this.showspinloading = true;
    this.show = false;
    this.showspinLoadingMessage = msg;
  }

  hideLoadingSpinnerAndShowForm() {
    this.show = true;
    this.showspinloading = false;
  }

  onChangeFacility() {
    console.log('yeh id hai' + this.addEmergency.id);
    // for(var i in this.addEmergency.facilities)
    //   this.name = (this.addEmergency.facilities[i]["facilities"]);

    //   console.log(this.name);
    this.printFacilities = [];
    this.facilitiesArray = [];

    this.addEmergency.facilities.map(f => {
      this.printFacilities.push(f['name']);
      let obj = {
        name: f['name'],
        price: f['price'] + f['extraCharges']
      };
      this.facilitiesArray.push(obj);
    });
    this.date = new Date();

    this.printFacilities.join(',');
    ///let printfacilities = this.addEmergency.facilities.join(',')

    this.addEmergency.price = 0;
    this.addEmergency.total = 0;
    this.addEmergency.facilities.map(f => {
      this.addEmergency.price = this.addEmergency.price + parseInt(f['price']) + parseInt(f['extraCharges']);
      this.addEmergency.total = this.addEmergency.price;
    });
  }

  discounter(value) {
    let dis = value;

    this.addEmergency.total = this.addEmergency.price;

    dis > this.addEmergency.total ? (this.discountCheck = false) : (this.discountCheck = true);
    dis ? 0 : dis;

    this.addEmergency.discount = dis;

    this.addEmergency.total = this.addEmergency.total - this.addEmergency.discount;
  }

  getfacilitiesInDropdown() {
    this.multiDropdown = [];

    // this.showLoading = true;
    this.showLoadingSpinnerAndHideForm('Getting facilities');
    this.erService.getEr().subscribe(
      data => {
        if (data.length) {
          this.hidder = false;
          this.hideLoadingSpinnerAndShowForm();
        } else {
          this.showspinloading = false;
          this.hidder = true;
        }

        data.forEach(e => {
          this.multiDropdown.push({
            label: e.name + ' / ' + (e.price + e.extraCharges) + 'Rs',
            value: e
          });
        });
      },
      error => {
        this.showspinloading = false;

        console.log(error);
        console.log('error agya yar');
        this.messageService.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }

  saveOpdEmergency() {
    console.log(this.addEmergency);
    this.total = this.addEmergency.total;
    this.discount = this.addEmergency.discount;

    console.log('total,discount', this.total + '  ,' + this.discount);
    this.addEmergency.facilities = this.printFacilities;
    this.opdEr.saveOpdEr(this.addEmergency).subscribe(
      data => {
        // here is printer thing
        // this.printId = "print-section";
        //this.showprint = false;
        this.printer = false;
        console.log(data);
        this.messageService.add({
          severity: 'success',
          summary: 'Added Succesfully',
          detail: 'Emergency Service Added'
        });
      },
      error => {
        this.printer = true;
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }

  routeToEr() {
    this.router.navigate(['adder']);
  }
}
