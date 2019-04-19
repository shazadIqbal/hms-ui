import { Component, OnInit } from '@angular/core';
import { AddErComponent } from '../add-er/add-er.component';
import { AddEmergency } from '../add-er/Add-er';
import { Router } from "@angular/router";
import { ErserviceService } from '../Services/erservice.service';
import { SelectItem, MessageService } from "primeng/api";
import { _EmergencyClass } from './Emergency';
import { Key } from 'protractor';
import { OpdErService } from '../Services/opd-er.service';



@Component({
  selector: 'app-opd-emergency',
  templateUrl: './opd-emergency.component.html',
  styleUrls: ['./opd-emergency.component.css']
})
export class OpdEmergencyComponent implements OnInit {

  multiDropdown: SelectItem[];
  addEmergency: _EmergencyClass = new _EmergencyClass();
  name: string[];
  printFacilities = [];
  getStatus : boolean = true;
  getIdWhenStatus_200 : any;
  // printStatus : boolean;
  // 
  


  constructor(private router: Router, private erService: ErserviceService, private opdEr: OpdErService,    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getfacilitiesInDropdown();
    this.addEmergency.price = 0;
  
  }
   

  back() {
    this.router.navigate(['/'])
  }
  
  onChangeFacility(){
    // for(var i in this.addEmergency.facilities)
    //   this.name = (this.addEmergency.facilities[i]["facilities"]);
    //   console.log(this.name);
    this.printFacilities = []
    this.addEmergency.facilities.map((f)=>{
       this.printFacilities.push(f["facilities"])
     })
     this.printFacilities.join(',')
    ///let printfacilities = this.addEmergency.facilities.join(',')
    console.log(this.printFacilities)
  
    this.addEmergency.price = 0 ;
    this.addEmergency.total = 0;
    this.addEmergency.facilities.map(f => {
    this.addEmergency.price = this.addEmergency.price + parseInt(f["price"]);
    this.addEmergency.total = this.addEmergency.price;
    console.log(this.addEmergency.total);
    
    });

  }

  getfacilitiesInDropdown() {
    this.multiDropdown = [];
    this.erService.getErFacility().subscribe(
      data => {
        // for (var keys in data){
          //   this.name.push((data[keys].facilities));
          //   // this.name.push((data[keys].price));
          //   console.log("men names honn"+name);
          // }
          // // console.log(data[0]);
        data.forEach(e => {
          this.multiDropdown.push({
            label: e.facilities,
            value: e
          });
        });
      },
      error => {
        console.log("error agya yar");
      }
    );
  }

  saveOpdEmergency(formdata: any){
    this.opdEr.saveOpdEr(formdata).subscribe(
      data => {
        console.log(formdata);
        this.messageService.add({
          severity: "success",
          summary: "Added Succesfully",
          detail: "Emergency Service Added"
        });
      },
      error => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      }

    )
  }

  checkingResponse(){
    this.opdEr.getOpdEr()
    .subscribe(res => {
      // If request fails, throw an Error that will be caught
      if(res.status < 200 || res.status >= 300) {
        // this.getIdWhenStatus_200 = res;
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      
      } 
      // If everything went fine, return the response
      else{
        this.getIdWhenStatus_200="print-section";
      }
    })
  }
   



}
