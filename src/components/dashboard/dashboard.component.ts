import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  name:string="";
  constructor(private userService:UserService){
    this.name=this.userService.getUser().name;
  }
  
  SignOut() {
    this.userService.signOut();
  }
}
