import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  cars:any;

  cols: any[];
  constructor() { }
ngOnInit(){
  this.cols = [
    { field: 'name', header: 'NAME' },
    {field: 'age', header: 'AGE' },
    { field: 'email', header: 'EMAIL' },
    {field: 'add', header: 'ADDRESS' },
   
];
  
this.cars= [
  { name: 'asad ', age:'23',email:'hhhhhhhhhhhhhhhh',add:'mnjdchjdgsvdshvb' },
  { name: 'amir',  age:'24',email:'kkkkkkkkkkkkkkkkkk',add:'ahvcdshvsdhvcshhj'},
  { name: 'amir',  age:'24',email:'kkkkkkkkkkkkkkkkkk',add:'ahvcdshvsdhvcshhj'},
  { name: 'amir',  age:'24',email:'kkkkkkkkkkkkkkkkkk',add:'ahvcdshvsdhvcshhj'},
  { name: 'amir',  age:'24',email:'kkkkkkkkkkkkkkkkkk',add:'ahvcdshvsdhvcshhj'},
  { name: 'amir',  age:'24',email:'kkkkkkkkkkkkkkkkkk',add:'ahvcdshvsdhvcshhj'},
  { name: 'amir',  age:'24',email:'kkkkkkkkkkkkkkkkkk',add:'ahvcdshvsdhvcshhj'},
  { name: 'amir',  age:'24',email:'kkkkkkkkkkkkkkkkkk',add:'ahvcdshvsdhvcshhj'},
 

];
}
  
  display: boolean = false;

  showDialog() {
      this.display = true;
  }

}


