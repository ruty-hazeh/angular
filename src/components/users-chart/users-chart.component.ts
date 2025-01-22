import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users-chart',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './users-chart.component.html',
  styleUrl: './users-chart.component.css'
})
export class UsersChartComponent implements OnInit {
  users: any[] = [];
  constructor(private usersService:UsersService,){
  }
  
  ngOnInit() {
    this.users = this.usersService.getUsers(); 
  }
 
}
