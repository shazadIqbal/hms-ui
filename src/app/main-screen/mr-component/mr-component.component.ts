
import { PatientformComponent } from './../../patientform/patientform.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from 'src/app/patientservice.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mr-component',
  templateUrl: './mr-component.component.html',
  styleUrls: ['./mr-component.component.css']
})
export class MrComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private patientService: PatientserviceService,
    private mesgService: MessageService
  ) {}

  ngOnInit() {}

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  check(mrNo: any) {

    // this.mesgService.add({
    //   severity: 'error',
    //   summary: 'No Record Found',
    //   detail: 'Add a new Patient Please'
    // });

    // setTimeout(() => {
    //   this.router.navigate(['/patientform']);
    // }, 3000);
    // tslint:disable-next-line: triple-equals
    this.patientService.getPatientsByMRNO(mrNo).subscribe(data => {
      // tslint:disable-next-line: triple-equals
      if (data == null || mrNo == '') {
        console.log(data);
        // console.log(mrNo+"hello");
        console.log('patientDoesNoteExists');
        this.mesgService.add({
          severity: 'error',
          summary: 'No Record Found',
          detail: 'Add a new Patient Please'
        });

        setTimeout(() => {
          this.router.navigate(['/patientform']);
        }, 3000);
      } else {
        //  console.log(mrNo+"hello");
        this.mesgService.add({
          severity: 'success',
          summary: 'SUCCESS',
          detail: 'Patient Found'
        });
        console.log('patientExists');
        this.router.navigate(['/patient']);
      }
    }),
      error => {
        this.mesgService.add({
          severity: 'error',
          summary: 'FAILED',
          detail: 'Please check your internet connection'
        });
      };
  }
  onConfirm() {
    this.mesgService.clear('c');
  }

  onReject() {
    this.mesgService.clear('c');
  }
}

// import { PatientformComponent } from './../../patientform/patientform.component';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { PatientserviceService } from 'src/app/patientservice.service';
// import { MessageService } from 'primeng/api';
//
// @Component({
//   selector: 'app-mr-component',
//   templateUrl: './mr-component.component.html',
//   styleUrls: ['./mr-component.component.css']
// })
// export class MrComponentComponent implements OnInit {
//   constructor(
//     private router: Router,
//     private patientService: PatientserviceService,
//     private mesgService: MessageService
//   ) {}
//
//   ngOnInit() {
//     //  this.mesgService.add({
//     //       severity: 'Not found',
//     //       summary: 'No Record Found',
//     //       detail: 'Add a new Patient Please'
//     //     });
//   }
//
//   numberOnly(event): boolean {
//     const charCode = event.which ? event.which : event.keyCode;
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//       return false;
//     }
//     return true;
//   }
//
//   check(mrNo: any) {
//     this.mesgService.add({
//       severity: 'error',
//       summary: 'No Record Found',
//       detail: 'Add a new Patient Please'
//     });
//
//     setTimeout(() => {
//       this.router.navigate(['/patientform']);
//     }, 3000);
//     // tslint:disable-next-line: triple-equals
//     this.patientService.getPatientsByMRNO(mrNo).subscribe(data => {
//       // tslint:disable-next-line: triple-equals
//       if (data == null || mrNo == '') {
//         console.log(data);
//         // console.log(mrNo+"hello");
//         console.log('patientDoesNoteExists');
//         // this.mesgService.add({
//         //   severity: 'error',
//         //   summary: 'No Record Found',
//         //   detail: 'Add a new Patient Please',
//
//         // });
//
//         // setTimeout(() => {
//
//         //   this.router.navigate(['/patientform']);
//         // }, 3000);
//       } else {
//         //  console.log(mrNo+"hello");
//         this.mesgService.add({
//           severity: 'success',
//           summary: 'SUCCESS',
//           detail: 'Patient Found'
//         });
//         console.log('patientExists');
//         this.router.navigate(['/patient']);
//       }
//     }),
// // tslint:disable-next-line: no-unused-expression
//       error => {
//         this.mesgService.add({
//           severity: 'error',
//           summary: 'FAILED',
//           detail: 'Please check your internet connection'
//         });
//       };
//   }
//   onConfirm() {
//     this.mesgService.clear('c');
//   }
//
//   onReject() {
//     this.mesgService.clear('c');
//   }
// }

