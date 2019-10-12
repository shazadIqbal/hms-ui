
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LabtestServiceService {

  private url:any= environment.baseUrl+"api/labtest";
  constructor(private http:HttpClient) { 
  }

  getcategory():Observable<any>{
   return this.http.get(this.url+"/category");
  }

  postcategory(category):Observable<any>{
    return this.http.post(this.url+"/category",category)
  }


  getlabtest():Observable<any>{
    return this.http.get(this.url+"/");
   }
 

   postlabtest(test):Observable<any>{
    return this.http.post(this.url+"/",test);
  }

  deletelabtest(id:any):Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }

  getCompleteProcessReportAgainstPatient(id:any):Observable<any>{
    return this.http.get(environment.labBackEndUrl+"api/patientReport/patient/" + id);
  }

  getLabTestCreatedInLabApp():Observable<any>
  {
    return this.http.get(environment.labBackEndUrl+"api/labtestregistration/opd/");
  }

  getReportDetailsByPatientReportId(id:any):Observable<any>{
    return this.http.get(environment.labBackEndUrl +"api/patientReport/"+id)
  }
  UpdatePatientReport(id:Number,updatedReport:Object):Observable<any>{
    return this.http.put(environment.labBackEndUrl +"api/patientReport/patient/update/"+id,updatedReport)
  }



  
}
