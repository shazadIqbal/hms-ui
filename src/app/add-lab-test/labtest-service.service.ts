
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LabtestServiceService {

  private url:any="http://192.168.0.135:8080/api/labtest";
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




  
}
