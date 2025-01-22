import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = [
    new User(1, 'ruty', 34),
    new User(2, 'lea', 8, ),
    new User(3, 'kaila', 54),
    new User(4, 'tamar', 23),
  ];

  getUsers() {
    return this.users;
  }

  getUserById(id:number) {
    return this.users.find(u => u.id==id);
  }
}