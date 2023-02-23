import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasService {

  constructor(private http: HttpClient) { }

  postCasTest(data : any){
    return this.http.post<any>("http://localhost:9092/casTestManager", data);
  }

  getAllCasTest(){
    return this.http.get<any>("http://localhost:9092/casTestManager");
  }

  getCasTest(id : number){
    return this.http.get<any>("http://localhost:9092/casTestManager/"+id);
  }

  putCasTest(data : any, id : number){
    return this.http.put<any>("http://localhost:9092/casTestManager/"+id, data);
  }

  deleteCasTest(id : number){
    return this.http.delete<any>("http://localhost:9092/casTestManager/"+id);
  }

  getVisionCasTest(id: number){
    return this.http.get<any>("http://localhost:9092/casTestManager/visionCasTest/"+id);
  }

}
