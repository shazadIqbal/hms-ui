import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddpanellistseviceService } from '../addpanellist/addpanellistsevice.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit {
  panels:any;
  indexFind:any;
  cols: any[];
  loading: boolean;
  datasource: any;
  showLoading=false;
   totalRecords: number;

  constructor(private router : Router,private panelService: AddpanellistseviceService) { }

  ngOnInit() {
    this.showTable();
  }
  showTable(){
    this.showLoading = true;
    this.panelService.getPanel().subscribe((Response)=>{
      console.log("response is here",Response);
      this.showLoading = false;
      this.panels=Response;
    })





    this.cols = [
      { field: 'id', header: 'ID' },
      {field: 'panelName', header: 'Panel Name' },
      {field: 'panelType', header: 'Panel Type' },
      {field: 'panelStartDate', header: 'Panel Start Date' },
      {field: 'panelEndDate', header: 'Panel End Date' },
      {field: 'panelFacility', header: 'Panel Facility' }
    ];


    this.panels=[];

  }

  addPanel() {

    this.router.navigate(['/addpanellist']);
  }

  deletePanelByID(rowData: any) {
    console.log(rowData);
  //  this.indexFind = this.panels.findIndex(i => i.id === rowData);
  //   console.log(this.indexFind);
  //   this.panels.splice(this.indexFind,1);
    this.panelService.deleteById(rowData).subscribe(
      data => {
        this.panelService.getPanel().subscribe((data: any) => {});
        this.showTable();
        console.log(data);
      },
      error => {
        console.log(error);

      }
    );
  }

  backToMain(){
    this.router.navigate(['mainscreen']);
  }
 
}
