import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = { 
    id: 0, 
    name: '', 
    age: 0, 
  };

  public isUser: boolean = false;

  constructor(private router: Router) {}

  getUser() {
    return this.user;
  }

  signIn(name: string, id: number) {
    this.user.name = name;
    this.user.id = id;
    this.isUser = true;
    this.router.navigate(['/users-chart']);
  }

  signOut() {
    this.isUser = false;
    this.router.navigate(['/auth']);
  }
}
