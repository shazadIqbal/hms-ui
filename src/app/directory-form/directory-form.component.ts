import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Directory } from './directory';
import { DirectoryService } from '../services/directory.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-directory-form',
  templateUrl: './directory-form.component.html',
  styleUrls: ['./directory-form.component.css']
})
export class DirectoryFormComponent implements OnInit {
  directory: Directory;
  constructor(
    private route: Router,
    private directoryServ: DirectoryService,
    private messageService: MessageService
  ) {}

  cols: any = [];
  loader: any = false;

  ngOnInit() {
    this.directory = new Directory();
  }
  back() {
    this.route.navigate(['adddirectory']);
  }

  submitDirectory() {
    console.log('submit directory');
    this.loader = true;

    this.directoryServ.postDirectory(this.directory).subscribe(
      response => {
        this.loader = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Service Message',
          detail: Object.keys(response)[0]
        });
      },
      (error) => {
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
