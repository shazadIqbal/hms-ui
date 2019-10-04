import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnChanges {

  @Input() public facilities;

 



  cols: any[];

  constructor(private route: Router) { }

  ngOnChanges(changes: SimpleChanges) {


    this.facilities = changes["facilities"].currentValue;

    

    this.cols = [
      { field: 'name', header: 'Facility' },
      { field: 'price', header: 'Price' }
    ];

    

    // console.log(this.facilities)

  }

  routeToEr() {
    this.route.navigate(['adder']);
  }

}
