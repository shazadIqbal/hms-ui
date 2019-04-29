import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { NavBarService } from '../Services/NavBarService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public nav:NavBarService ) { }

  items1: MenuItem[];

ngOnInit(){
  this.items1 = [
    {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
    {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
    {label: 'Documentation', icon: 'fa fa-fw fa-book'},
    {label: 'Support', icon: 'fa fa-fw fa-support'},
    {label: 'Social', icon: 'fa fa-fw fa-twitter'}
];
}
}
