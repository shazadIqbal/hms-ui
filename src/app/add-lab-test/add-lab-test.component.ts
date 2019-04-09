import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabtestServiceService } from './labtest-service.service';
import {MessageService} from 'primeng/api';




@Component({
  selector: 'app-add-lab-test',
  templateUrl: './add-lab-test.component.html',
  styleUrls: ['./add-lab-test.component.css']
})
export class AddLabTestComponent implements OnInit {

  constructor(private route: Router, private labServ: LabtestServiceService,private messageService: MessageService) { }

  cols: any = [];
  tests: any;

  loader: any = true;
  empty:any=false;
  delete:any=false;
  ngOnInit() {


    this.labServ.getlabtest().subscribe((data) => {
      this.loader = false;
      this.tests = [];


      !data.length?this.empty=true:"";
      data.map((value) => {

        this.tests.push({
          'id': value.id,
          'category': value.category,
          'testname': value.name,
          'testprice': value.price,
          'testdetails': value.details
        })
      })
    }, error => { console.log(error) })
    this.cols = [
      { field: 'id', header: "ID" },
      { field: 'category', header: 'Test Category' },
      { field: 'testname', header: 'Test Name' },
      { field: 'testprice', header: 'Test Price' },
      { field: 'testdetails', header: 'Test Details' }
    ]








  }


  inactive(id,name) {
    this.delete=true;
    this.labServ.deletelabtest(id).subscribe((response) => {
      console.log(response)
      this.tests = [];
      !response.length?this.empty=true:"";
      this.delete = false;
      response.map((value) => {

        this.tests.push({
          'id': value.id,
          'category': value.category,
          'testname': value.name,
          'testprice': value.price,
          'testdetails': value.details
        })

      })


      this.messageService.add({severity:'success', summary:'Service Message', detail:name+' successfully deleted!'});
    },error=>{console.log(error)
      this.delete=false;
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Error deleting Lab Test!'});
    })
  }
  addlabtest() {
    this.route.navigate(['/addlab']);
  }
  addlabcat() {
    this.route.navigate(['/addlabcat']);
  }

  backtomain(){
    this.route.navigate(['mainscreen']);
  }

}
