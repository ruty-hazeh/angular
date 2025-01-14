import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { MyEvent } from '../models/my-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url = "https://eventsapi.onrender.com/api/Events"
  constructor(private http: HttpClient) { }
  events$ : Observable<MyEvent[]>=new Observable<MyEvent[]>;

  getEvents(){
     this.http.get<MyEvent[]>(this.url).subscribe(data=>{
      this.events$=of(data);
    })
  }
  addEvents(event:MyEvent){
    return this.http.post<MyEvent>(this.url,event);
  }
}
