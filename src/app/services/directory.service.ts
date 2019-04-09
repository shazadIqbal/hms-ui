import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DirectoryService {


  constructor(private http: HttpClient) { }


  getDirectory(): Observable<any> {


   return this.http.get(environment.directory);

  }
  postDirectory(obj):Observable<any>
  {
    return this.http.post(environment.directory,obj);
  }

  deleteDirectory(id):Observable<any>
  {
    return this.http.delete(environment.directory+id);
  }
}
