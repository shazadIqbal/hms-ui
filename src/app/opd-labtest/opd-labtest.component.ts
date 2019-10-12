import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { opdlabtest } from './opd-labtest-model';
import { SelectItem, MessageService } from 'primeng/api';
import { LabtestServiceService } from '../add-lab-test/labtest-service.service';
import { OpdLabTestService } from '../Services/opd-lab-test.service';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-opd-labtest',
  templateUrl: './opd-labtest.component.html',
  styleUrls: ['./opd-labtest.component.css']
})
export class OpdLabtestComponent implements OnInit {
  addLabTests: opdlabtest = new opdlabtest();
  showLoading = true;
  hidder = false;
  show = false;
  showspinloading = true;
  showspinLoadingMessage = 'Loading';
  multiDropdown: SelectItem[];
  printLabTest = [];
  name: string[];
  printer = true;
  labtestArray = [];
  patientName: String;
  patientMrNo: Number;
  discount = 0;
  total = 0;

  discountCheck = true;

  date;
  constructor(
    private router: Router,
    private patientService: PatientserviceService,
    private activeRoute: ActivatedRoute,
    private labtest: LabtestServiceService,
    private messageservice: MessageService,
    private labtestservice: OpdLabTestService
  ) {}

  ngOnInit() {
    // this.labtest.getLabTestCreatedInLabApp().subscribe((res=>{
    //   console.log(res.bodyList);
    // }))
    // this.getfacilitiesInDropdown();
    this.getfacilitiesInDropdown();

    let id = this.activeRoute.snapshot.params['id'];
    this.addLabTests.id = parseInt(id);

    this.addLabTests.price = 0;
    this.patientService.getPatientsByMRNO(id).subscribe(a => {
      // console.log(a);
      this.patientName = a.name;
      this.patientMrNo = a.id;
      this.addLabTests.patient = a;
    });
  }

  back() {
    this.router.navigate(['/monitor/' + this.addLabTests.id]);
  }

  showLoadingSpinnerAndHideForm(msg) {
    this.showspinloading = true;
    this.show = false;
    this.showspinLoadingMessage = msg;
  }

  hideLoadingSpinnerAndShowForm() {
    this.showspinloading = false;
    this.show = true;
  }

  onChangeLabTest() {
    this.printLabTest = [];
    this.labtestArray = [];

    this.addLabTests.labTests.map(f => {
      this.printLabTest.push(f['name']);

      let obj = {
        name: f['name'],
        price: f['price']
      };
      this.labtestArray.push(obj);
    });
    this.date = new Date();
    this.printLabTest.join(',');
    ///let printfacilities = this.addEmergency.facilities.join(',')
    // console.log(this.printLabTest);

    this.addLabTests.price = 0;
    this.addLabTests.total = 0;
    this.addLabTests.discount = this.addLabTests.discount / 100;

    this.addLabTests.labTests.map(f => {
      this.addLabTests.price = this.addLabTests.price + parseInt(f['price']);

      // this.addLabTests.cashRecieve-(this.addLabTests.discount*this.addLabTests.cashRecieve);
      this.addLabTests.total = this.addLabTests.price;
      // console.log(this.addLabTests.total);
    });
  }

  onChangeDiscount() {
    let discount = this.addLabTests.discount;
    let total = this.addLabTests.price - discount;
    this.addLabTests.total = this.addLabTests.price - this.addLabTests.discount;
  }

  discounter(value) {
    let dis = value;

    this.addLabTests.total = this.addLabTests.price;

    dis > this.addLabTests.total ? (this.discountCheck = false) : (this.discountCheck = true);
    dis ? 0 : dis;

    this.addLabTests.discount = dis;

    this.addLabTests.total = this.addLabTests.total - this.addLabTests.discount;
  }

  getfacilitiesInDropdown() {
    this.multiDropdown = [];

    // this.showLoading = true;
    this.showLoadingSpinnerAndHideForm('Getting labtests');
    this.labtest.getLabTestCreatedInLabApp().subscribe(
      data => {
        if (data.length>0) {
          this.hidder = false;
          // this.show = true;
          this.hideLoadingSpinnerAndShowForm();
        }
        else {
          this.showspinloading = false;
          this.hidder = true;
        }
        data.bodyList.map(e => {
          this.multiDropdown.push({
            label: e.name,
            value: e
          });
        });
        console.log("hello i am data",this.multiDropdown)
      },
      error => {
        this.show = false;
        // console.log(error);
        this.showspinloading = false;

        // console.log('error agya yar');
        this.messageservice.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }

  saveOpdLabTest() {
    this.addLabTests.labTests = this.printLabTest;
    this.total = this.addLabTests.total;
    this.discount = this.addLabTests.discount;
    this.addLabTests.patient = this.labtestservice.saveOpdEr(this.addLabTests).subscribe(
      data => {
        this.printer = false;
        // console.log(data);
        this.messageservice.add({
          severity: 'success',
          summary: 'Added Succesfully',
          detail: 'Opd Lab test successfully done!'
        });
      },
      error => {
        this.printer = true;
        // console.log(error);
        this.messageservice.add({
          severity: 'error',
          summary: 'Error Found',
          detail: 'Something went wrong check your internet connection '
        });
      }
    );
  }

  routeToAddLab() {
    this.router.navigate(['addlab']);
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
  }
}
