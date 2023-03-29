import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  constructor(private http: HttpClient) { }

  postRelease(data : any){
    return this.http.post<any>("http://51.77.132.116:9097/releaseManager", data);
  }

  getAllRelease(){
    return this.http.get<any>("http://51.77.132.116:9097/releaseManager");
  }

  putRelease(data : any, id : number){
    return this.http.put<any>("http://51.77.132.116:9097/releaseManager/"+id, data);
  }

  getRelease(id : number){
    return this.http.get<any>("http://51.77.132.116:9097/releaseManager/"+id);
  }

  deleteRelease(id : number){
    return this.http.delete<any>("http://51.77.132.116:9097/releaseManager/"+id);
  }

  identifiantRelease(){
    return localStorage.getItem('id');
  }
}
