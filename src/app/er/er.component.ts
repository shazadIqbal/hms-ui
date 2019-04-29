import { Facility } from "./../addpanellist/facility";
// import { AddErComponent } from "./../add-er/add-er.component";
import { ErserviceService } from "./../services/erservice.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { AddEmergency } from "../add-er/Add-er";

@Component({
  selector: "app-er",
  templateUrl: "./er.component.html",
  styleUrls: ["./er.component.css"]
})
export class ErComponent implements OnInit {
  cols: any[];
  erArray: any; //this is an array of er services bascially the table list
  delete: any = false; //flag for delete
  loading: any = true; // loader or progress bar status
  totalRecords = 0;
  datasource: any = [];

  constructor(
    private router: Router,
    private erService: ErserviceService,
    private messageService: MessageService
  ) {
    this.cols = [
      { field: "name", header: "Emergency Service Name" },
      { field: "resources", header: "Service Resources" },
      { field: "facilities", header: "Facility" },
      { field: "price", header: "Price" },
      { field: "extraCharges", header: "Extra Charges" },
      { field: "total", header: "Total Ammount" }
    ];
  }
  ngOnInit() {
    this.showTable(); //ngonit will load the whole data
  }

  deleteErByID(id: any) {
    console.log(id);
    this.loading = true;
    this.erService.deleteById(id).subscribe(
      data => {
        this.loading = false;
        if (data) {
          this.messageService.add({
            severity: "success",
            summary: "Deleted",
            detail: "Patient deleted SuccesFully"
          });
          this.showTable();
          // this.patientService.getPatients().subscribe((data: any) => {});
          console.log(data);
        } else {
          this.loading = true;
          this.messageService.add({
            severity: "error",
            summary: "Can't delete",
            detail: "You are not authorized for this action"
          });
          // tslint:disable-next-line: triple-equals
          if (this.loading == true) {
            this.loading = false;
          }
        }
      },
      error => {
        this.loading = false;
        this.messageService.add({
          severity: "error",
          summary: "Cant not delete",
          detail: "You are not authorized for this action"
        });
        console.log(error);
      }
    );
  }

  showTable() {
    this.erArray = [];
    this.loading = true;
    this.totalRecords = 0;
    this.erService.getEr().subscribe(data => {
      this.datasource = [];
      this.datasource = data;
      this.totalRecords = this.datasource.length;
      console.log(this.datasource);
      console.log("here is the table data", data);
      data.map(p => {
        this.erArray.push({
          id: p.id,
          name: p.name,
          resources: p.resources,
          facilities: p.facilities.map(f => f.name),
          price: p.price,
          extraCharges: p.extraCharges,
          total: p.total
        });
      });
      this.loading = false;
    });
  }

  back() {
    this.router.navigate([""]);
  }
  gotoErService() {
    this.router.navigate(["/adder"]);
  }
}
