import { Component, OnInit } from '@angular/core';
import { AddErComponent } from '../add-er/add-er.component';
import { AddEmergency } from '../add-er/Add-er';
import { Router, ActivatedRoute } from "@angular/router";
import { ErserviceService } from '../Services/erservice.service';
import { SelectItem, MessageService } from "primeng/api";
import { _EmergencyClass } from './Emergency';
import { Key } from 'protractor';
import { OpdErService } from '../Services/opd-er.service';



@Component({
  selector: 'app-opd-emergency',
  templateUrl: './opd-emergency.component.html',
  styleUrls: ['./opd-emergency.component.css']
})
export class OpdEmergencyComponent implements OnInit {

  multiDropdown: SelectItem[];
  addEmergency: _EmergencyClass = new _EmergencyClass();
  name: string[];
  printFacilities = [];
  showprint:boolean = true;
  getStatus : boolean = true;
  getIdWhenStatus_200 : any;
  showLoading= true;
  show = false;
  printer= true;
  showspinloading=true;
  showspinLoadingMessage = "Loading";
 // id: number;
  
  // printStatus : boolean;
  // 
  


  constructor(private activeRoute:ActivatedRoute,private router: Router, private erService: ErserviceService, private opdEr: OpdErService,    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getfacilitiesInDropdown();
    // if(this.multiDropdown == []){
    //   this.show = true;
    //   this.showLoading = true;
    // }
  //this.showLoading=true
    this.addEmergency.id=this.activeRoute.snapshot.params['id'];
    this.addEmergency.price = 0;
  
  }
   
 
  
  back() {
    this.router.navigate(['/monitor/'+ this.addEmergency.id]);
  }

  showLoadingSpinnerAndHideForm(msg){
    this.showspinloading=true;
    this.show=false
    this.showspinLoadingMessage = msg;
  }

  hideLoadingSpinnerAndShowForm(){
    this.show=true
    this.showspinloading=false;
  }

  

  onChangeFacility(){
    console.log("yeh id hai"+this.addEmergency.id)
    // for(var i in this.addEmergency.facilities)
    //   this.name = (this.addEmergency.facilities[i]["facilities"]);
    //   console.log(this.name);
    this.printFacilities = []
    this.addEmergency.facilities.map((f)=>{
       this.printFacilities.push(f["name"])
     })
     this.printFacilities.join(',')
    ///let printfacilities = this.addEmergency.facilities.join(',')
    console.log(this.printFacilities)
  
    this.addEmergency.price = 0;
    this.addEmergency.total = 0;
    this.addEmergency.facilities.map(f => {
    this.addEmergency.price = this.addEmergency.price + parseInt(f["price"]);
    this.addEmergency.total = this.addEmergency.price;
    console.log(this.addEmergency.total);
    
    });

  }

  getfacilitiesInDropdown() {
   
    this.multiDropdown = [];
   
   // this.showLoading = true;
   this.showLoadingSpinnerAndHideForm("Getting facilities");
    this.erService.getErFacility().subscribe(
      data => {
             
        if(data.length){
          this.hideLoadingSpinnerAndShowForm()
        
        }
          
              // for (var keys in data){
          //   this.name.push((data[keys].facilities));
          //   // this.name.push((data[keys].price));
          //   console.log("men names honn"+name);
          // }
          // // console.log(data[0]);
          console.log("hello")
        data.forEach(e => {
         
        
          this.multiDropdown.push({
            label: e.name,
            value: e
          });
        });
      
       
      },
      error => {
        this.show = false;
        console.log(error)
        console.log("error agya yar");
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      
      }
    );
  }

  saveOpdEmergency(){
    console.log(this.addEmergency)
    console.log(this.addEmergency.facilities);
    this.addEmergency.facilities = this.printFacilities;
    this.opdEr.saveOpdEr(this.addEmergency).subscribe(

      data => {
        // here is printer thing
       // this.printId = "print-section";
       //this.showprint = false;
       this.printer = false;
        console.log(data);
        this.messageService.add({
          severity: "success",
          summary: "Added Succesfully",
          detail: "Emergency Service Added"
          
        });
      },
      error => {
        this.printer = true;
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      }

    )
  }

  // checkingResponse(){
  //   this.opdEr.getOpdEr()
  //   .subscribe(res => {
  //     // If request fails, throw an Error that will be caught
  //     if(res.status < 200 || res.status >= 300) {
  //       // this.getIdWhenStatus_200 = res;
  //      this.printer = false;
      
  //     } 
  //     // If everything went fine, return the response
  //     else{
  //      this.printer = true;
  //     }
  //   })
  // }
   



}
