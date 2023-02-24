import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  postTicket(data : any){
    return this.http.post<any>("http://localhost:9092/ticketManager", data);
  }

  getAllTicket(){
    return this.http.get<any>("http://localhost:9092/ticketManager");
  }

  getVisionTicket(id: number){
    return this.http.get<any>("http://localhost:9092/ticketManager/visionsTicket/"+id);
  }

  getVisionBloquante(id: number){
    return this.http.get<any>("http://localhost:9092/ticketManager/visionsBloquante/"+id);
  }

  getVisionMajeuret(id: number){
    return this.http.get<any>("http://localhost:9092/ticketManager/visionsMajeure/"+id);
  }

  getVisionMineure(id: number){
    return this.http.get<any>("http://localhost:9092/ticketManager/visionsMineure/"+id);
  }

  getAllTicketForRelease(id:number){
    return this.http.get<any>("http://localhost:9092/ticketManager/ticketRelease/"+id);
  }

  getTicket(id:number){
    return this.http.get<any>("http://localhost:9092/ticketManager/"+id);
  }

  putTicket(data : any, id : number){
    return this.http.put<any>("http://localhost:9092/ticketManager/"+id, data);
  }

  deleteTicket(id : number){
    return this.http.delete<any>("http://localhost:9092/ticketManager/"+id);
  }
}