import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {


  currentId: number = 1;
  currentUser?: User;
  emptyUser? :string;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let t = this.activatedRoute;
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('userId');
      if (id) {
        this.currentId = +id;
        this.currentUser = this.usersService.getUserById(this.currentId);
        if(!this.currentUser)
        {
          this.emptyUser="שגיאה 404"
        }
      } else {
        this.emptyUser="שגיאה 404"

        console.error('Product ID not found');
      }
    });
  }
}

