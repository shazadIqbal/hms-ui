import { SelectItem, MessageService } from "primeng/api";
import { ErserviceService } from "./../services/erservice.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AddEmergency } from "./Add-er";
import {Location} from '@angular/common'

@Component({
  selector: "app-add-er",
  templateUrl: "./add-er.component.html",
  styleUrls: ["./add-er.component.css"]
})
export class AddErComponent implements OnInit {
  display = false;
  multidropdown: SelectItem[]; // facility dropdown
  addEmergency: AddEmergency = new AddEmergency(); // creating instance so we can store values in variables
  //pice: any;
  // tslint:disable-next-line: ban-types
  total: Number;
  facilityCount;


  constructor(
    private router: Router,
    private erService: ErserviceService,
    private messageService: MessageService,
    private location:Location
  ) {}

  ngOnInit() {
    this.getFacilityDropdown();
    this.addEmergency.price = 0;
    this.addEmergency.total = 0;
  }

  back() {
    this.location.back();
  }

  showDialog() {
    this.display = true;
  }

  submitErService(formdata: any) {
    this.erService.saveEr(formdata).subscribe(
      data => {
        // console.log(formdata);
        this.messageService.add({
          severity: "success",
          summary: "Added Succesfully",
          detail: "Emergency Service Added"
        });
      },
      error => {
        // console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      }
    );
  }

  onChangeFacility() {
    //let price;
    // console.log("hloo", this.addEmergency.facilities);
    this.addEmergency.price = 0; //it will also work for the negative
    this.addEmergency.total = 0;
    this.addEmergency.extraCharges = 0;
    this.addEmergency.facilities.map(f => {
      this.addEmergency.price = this.addEmergency.price + parseInt(f["price"]);
      this.addEmergency.total = this.addEmergency.price + this.addEmergency.extraCharges;
    });
  }

  // function for save/add facility
  saveFacility(fields: any) {
    this.display = false;
    // console.log(fields);
    this.erService.saveErFacility(fields).subscribe(
      data => {
        this.messageService.add({
          severity: "success",
          summary: "Added Succesfully",
          detail: "Facility Service Added"
        });
        // console.log(data);
        this.getFacilityDropdown();
      },
      error => {
        // console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      }
    );
  }

  // show values in the dropdown
  getFacilityDropdown() {
    // console.log("hey");
    this.multidropdown = [];
    this.erService.getErFacility().subscribe(
      data => {
        // console.log(data);
        data.map(p => {
          this.multidropdown.push({
            label: p.name,
            value: p
          });
        });
      },
      error => {
        // console.log("error agya yar");
      }
    );
  }

  // Function for total
  getSum(value: number) {
    this.addEmergency.extraCharges = 0;
    // console.log(value);
    this.addEmergency.extraCharges = value;
    this.addEmergency.total =
      this.addEmergency.price + this.addEmergency.extraCharges;
  }
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
