import { Component, OnInit, Input } from '@angular/core';



// const data = {
//   chart: {
//     caption: "Average Fastball Velocity",
//     yaxisname: "Velocity (in mph)",
//     subcaption: "[2005-2016]",
//     numbersuffix: " mph",
//     rotatelabels: "1",
//     setadaptiveymin: "1",
//     theme: "fusion"
//   },
//   this.
// };


@Component({
  selector: 'app-dashboardgraphs',
  templateUrl: './dashboardgraphs.component.html',
  styleUrls: ['./dashboardgraphs.component.css'],
  

})



export class DashboardgraphsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.dataSource=this.data;
    console.log(this.typeofgraph);
  }
  

@Input() data:any;
@Input() typeofgraph:any;
@Input() changedwidth:any;


  width = 600;
  height = 400;
  
  dataFormat = "json";
  dataSource ;
  
  
  
}
