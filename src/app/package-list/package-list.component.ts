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
  delete:any;

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'pName', header: 'Package Name' },
      { field: 'pFacility', header: 'Package Facility' },
      { field: 'pSponsor', header: 'Sponsor' },
      { field: 'pPrice' , header: 'Package Price' }
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
            pSponsor: value.pSponsor,
            pPrice : value.pPrice,
          });
        });
      },
      error => {
        // console.log(error);
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
    // console.log(a);
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
            pSponsor: value.pSponsor,
            pPrice: value.pPrice
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
