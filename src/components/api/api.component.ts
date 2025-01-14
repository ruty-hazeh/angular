import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
  constructor(public eventService :EventService){}

  ngOnInit(): void {
    this.eventService.getEvents();
  }

  
}
