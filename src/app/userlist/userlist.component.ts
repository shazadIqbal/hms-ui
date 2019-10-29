import { Component, OnInit } from '@angular/core';
import { DashboardserviceService } from '../Services/dashboardservice.service';
import { SignUpServiceService } from '../Services/sign-up-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: any;
  showLoading: boolean;
  cols: any[];
  constructor(
    private FormService: SignUpServiceService,
    private router: Router,
    private messageservice: MessageService
  ) {}

  ngOnInit() {
    this.showLoading = true;
    this.showTable();
  }
  showTable() {
    this.showLoading = true;
    this.FormService.getAllUsers().subscribe(Response => {
      if (Response) {
        this.showLoading = false;
        this.users = Response;
      }
    });

    this.cols = [
      { field: 'id', header: 'USER ID' },
      { field: 'name', header: 'FULL NAME' },
      { field: 'email', header: 'EMAIL' },
      { field: 'userType', header: 'USER TYPE' }
    ];

    this.users = [];
  }
  backToSignup() {
    this.router.navigate(['/signupform']);
  }

  ondelete(rowdata) {
    this.FormService.deleteById(rowdata).subscribe(
      data => {
        this.FormService.getAllUsers().subscribe((data: any) => {});
        this.showTable();
        this.messageservice.add({
          severity: 'success',
          summary: 'Service Message',
          detail: 'Successfully Deleted!'
        });
      },
      error => {
        this.messageservice.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Enable to delete!'
        });
      }
    );
  }
}
