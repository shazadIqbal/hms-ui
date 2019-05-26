import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from './package';
import { PackageServiceService } from '../Services/package-service.service';
import { from } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.css']
})
export class AddpackageComponent implements OnInit {
  package: Package;
  facilitydrop: any;
  packages: Package = new Package();

  constructor(
    private router: Router,
    private messageService: MessageService,
    private packageServ: PackageServiceService
  ) {
    this.facilitydrop= [
      {label: 'With Medication', value: 'with medication'},
      {label: 'Without Medication', value: 'without medication'}
    ]
  }

  cols: any = [];
  loader: any = false;

  ngOnInit() {
    this.package = new Package();
  }

  backtoPackageList() {
    this.router.navigate(['packagelist']);
  }

  submitPackage() {
    console.log('Add Package');
    this.loader = true;
    this.packageServ.postPackage(this.package).subscribe(
      response => {
        this.loader = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: Object.keys(response)[0]
        });
      },
      error => {
        this.loader = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Data adding failed!'
        });
      }
    );
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
