import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Panel } from './panel';
import { AddpanellistseviceService } from './addpanellistsevice.service';
import { MessageService } from 'primeng/api';
import { Facility } from './facility';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addpanellist',
  templateUrl: './addpanellist.component.html',
  styleUrls: ['./addpanellist.component.css']
})
export class AddpanellistComponent implements OnInit {
  date8: any;
  paneldrop: any;
  date1: any;
  cars: any;
  selectedCars1: any;
  panels: Panel = new Panel();
  multidropdown = [];
  display = false;
  facilityObj: Facility = new Facility();

  constructor(
    private panelService: AddpanellistseviceService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.paneldrop = [
      { label: 'free', value: 'free' },
      { label: '50% Off', value: '50% Off' },
      { label: 'No panel', value: 'No panel' }
    ];
  }

  ngOnInit() {
    this.getFcilityInIt();
  }

  getFcilityInIt() {
    this.panelService.getFacility().subscribe(response => {
      // console.log('response is here', response);

      response.forEach(e => {
        this.multidropdown.push({
          label: e.facilityName,
          value: e.facilityName
        });
      });
    });
  }

  save() {
    this.panelService.savePanel(this.panels).subscribe(
      error => {
        // console.log(error);
        this.messageService.add({
          severity: 'success',
          summary: 'Status',
          detail: 'unSuccessfull'
        });
      },
      data => {
        // console.log(data);
        this.messageService.add({ severity: 'success', summary: 'Status', detail: 'Successfull' });
      }
    );
  }
  Onsubmit() {
    this.save();
  }
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  showDialog() {
    this.display = true;
  }

  onTest(value) {
    // console.log('test value ', value);
  }
  OnFacilitysubmit(value) {
    // console.log('========================', value);
    // console.log('in facility');
    this.multidropdown = [];
    this.panels.panelFacility = [];
    this.facilityObj.facilityName = this.facilityObj.facilityName.toUpperCase();
    this.panelService.saveFacility(this.facilityObj).subscribe(
      data => {
        // console.log(data);
        const stat = Object.keys(data);
        // console.log(stat[0]);
        // tslint:disable-next-line: triple-equals
        if (stat[0] != 'Already Exsist') {
          this.messageService.add({
            severity: 'success',
            summary: 'Status',
            detail: 'Successfull'
          });
          this.getFcilityInIt();
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Status',
            detail: 'Already Exsist'
          });
        }
        this.facilityObj.facilityName = '';
      },
      error => {
        // console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Failed' });
        this.facilityObj.facilityName = '';
      }
    );
    this.getFcilityInIt();
  }
  // saveFacility(val:any){
  //     this.facilityObj.facilityName=val;
  OnClickInMulti() {
    this.getFcilityInIt();
  }
  addpanel() {
    // console.log('jj');
    this.router.navigate(['panellist']);
  }

  // //this.display="false";
  // }
}
