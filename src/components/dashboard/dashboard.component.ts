import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  name:string="";
  constructor(private authService:AuthService){
    this.name=this.authService.getAuth().name;
  }
  
  SignOut() {
    this.authService.signOut();
  }
}
