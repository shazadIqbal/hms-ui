import { Component, OnInit } from '@angular/core';
import { LabtestServiceService } from '../labtest-service.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-lab-cat',
  templateUrl: './add-lab-cat.component.html',
  styleUrls: ['./add-lab-cat.component.css']
})

export class AddLabCatComponent implements OnInit {

  loader: any = false;



  constructor(private labServ: LabtestServiceService, private messageService: MessageService,private route:Router, private _location: Location) { }


  ngOnInit() {
    this.labServ.getcategory().subscribe(d => 
      console.log(d), 
      error => 
      console.log(error)
      )
  }

  submitCategory(data) {
    this.loader=true;
    data.category = data.category.toUpperCase();
    this.labServ.postcategory(data).subscribe((d) => {

      if(Object.keys(d)[0]!=="Already exsist")
      {
        this.loader=false;
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail:Object.keys(d)[0]});
      }
      else
      {
        this.loader=false;
      this.messageService.add({ severity: 'error', summary: 'Service Message', detail:Object.keys(d)[0]});
      }



    }, error => {
      // console.log(error);
      this.messageService.add({ severity: 'warning', summary: 'Service Message', detail: error }); })

  }
  back()
  {

    this._location.back();

  }

}
