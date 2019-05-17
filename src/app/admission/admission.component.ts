import { AdmissionService } from "./../Services/admission.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SelectItem, MessageService } from "primeng/api";
import { Admission } from "./admission";
import { Location } from "@angular/common";

@Component({
  selector: "app-admission",
  templateUrl: "./admission.component.html",
  styleUrls: ["./admission.component.css"]
})
export class AdmissionComponent implements OnInit {
  bedType: SelectItem[];
  ProgressSpinnerDlg: boolean;
  // SelectedBed: string;

  public _admission = new Admission(); //instance of the model file

  constructor(
    private router: Router,
    private admissionSer: AdmissionService,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit() {
    this.bedsDropdown();
    this.ProgressSpinnerDlg = true;
  }

  back() {
    this.location.back();
  }

  bedsDropdown() {
    this.bedType = [
      { label: "General bed", value: "general" },
      { label: "Special bed", value: "special" }
    ];
  }

  submitAdmission() {
    console.log(this._admission);
    this.admissionSer.saveAdmission(this._admission).subscribe(
      data => {
        console.log(data);
        this.messageService.add({
          severity: "success",
          summary: "Succesfully",
          detail: "Beds added successsfully"
        });
      },
      error => {
        this.messageService.add({
          severity: "error",
          summary: "Error occured,Please Reload Your Page"
        });
        console.log(error);
      }
    );
    this.admissionSer.getAvailableBeds().subscribe(data => {
      // tslint:disable-next-line: forin
      for (const i in data) {
        console.log(data[i]);
      }
    });
  }
}
