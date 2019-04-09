import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DirectoryService} from '../services/directory.service'
import {MessageService} from 'primeng/api'
@Component({
  selector: 'app-add-directory',
  templateUrl: './add-directory.component.html',
  styleUrls: ['./add-directory.component.css']
})
export class AddDirectoryComponent implements OnInit {

  constructor(private route:Router,private directoryService:DirectoryService,private messageService:MessageService) { }
  cols:any;
  tests:any=[];
  loader:any=true;
  empty:any=false;

  ngOnInit() {
   

    this.cols = [
      { field: 'id', header: "ID" },
      { field: 'name', header: 'Full Name' },
      { field: 'number', header: 'Phone Number' },
      {field:'address',header:'Address'},
      {field:'erNo',header:'Emergency No'}
    ]

    this.directoryService.getDirectory().subscribe((response)=>{

      this.tests = [];
      

      this.loader=false;

      response.length?this.empty=false:this.empty=true;
      
      response.map((value) => {
       
        this.tests.push({
          'id': value.id,
          'name': value.name,
          'number': value.number,
          'address': value.address,
          'erNo': value.erNo
        })
      })
     
    },(error)=>{console.log(error)
      this.loader=false;
    })

  }

  back()
  {
    this.route.navigate(['mainscreen']);
  }

  inactive(a)
  {
    console.log(a)
    this.directoryService.deleteDirectory(a).subscribe((response)=>
    {
      
      this.tests=[];
      response.length?this.empty=false:this.empty=true;
      
      response.map((value) => {
       
        this.tests.push({
          'id': value.id,
          'name': value.name,
          'number': value.number,
          'address': value.address,
          'erNo': value.erNo
        })
      })
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Successfully Deleted!'});
   
    },(error)=>{

      this.messageService.add({severity:'error', summary:'Service Message', detail:'Enable to delete!'});
     
    })
  }

  routeDirectoryForm()
  {
    this.route.navigate(['directoryform']);

  }

}
