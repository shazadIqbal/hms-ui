import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageServiceService } from '../services/package-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  constructor(
    private router: Router,
    private packageService: PackageServiceService,
    private messageService: MessageService
  ) {}
  cols: any;
  packages: any = [];
  loader: any = true;
  empty: any = false;

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'pName', header: 'Package Name' },
      { field: 'pFacility', header: 'Package Facility' },
      { field: 'pStartDate', header: 'Start Date' },
      { field: 'pEndDate', header: 'End Date' },
      { field: 'pSponsor', header: 'Sponsor' }
    ];

    this.packageService.getPackages().subscribe(
      response => {
        this.packages = [];
        this.loader = false;
        response.length ? (this.empty = false) : (this.empty = true);
        response.map(value => {
          this.packages.push({
            id: value.id,
            pName: value.pName,
            pFacility: value.pFacility,
            pStartDate: value.pStartDate.substr(0, 10),
            pEndDate: value.pEndDate.substr(0, 10),
            pSponsor: value.pSponsor
          });
        });
      },
      error => {
        console.log(error);
        this.loader = false;
      }
    );
  }

  backtoMain() {
    this.router.navigate(['mainscreen']);
  }

  toAddPackage() {
    this.router.navigate(['addpackage']);
  }

  inactive(a) {
    console.log(a);
    this.packageService.deletePackage(a).subscribe(
      response => {
        this.packages = [];
        response.length ? (this.empty = false) : (this.empty = true);
        response.map(value => {
          this.packages.push({
            id: value.id,
            pName: value.pName,
            pFacility: value.pFacility,
            pStartDate: value.pStartDate,
            pEndDate: value.pEndDate,
            pSponsor: value.pSponsor
          });
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: 'Successfully Deleted!'
        });
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Enable to delete!'
        });
      }
    );
  }
}
