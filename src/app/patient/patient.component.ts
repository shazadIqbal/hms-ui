import { MessageService } from "primeng/api";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private mesgService: MessageService) { }

  ngOnInit()
   {
       this.mesgService.add({
            severity: 'Patinent  found',
            detail: 'How can i help you ?'
        });
  }

}
