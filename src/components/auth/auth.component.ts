import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  SignInForm=new FormGroup({
    name:new FormControl<string>('',[Validators.required]),
    id:new FormControl<number|null>(null,[Validators.required]),
  })
  constructor(private userService:UserService,private usersService: UsersService){}


  SignIn() {
    if(this.SignInForm.valid){
      const name = this.SignInForm.value.name as string;
      const id = this.SignInForm.value.id as number;
      const user = this.usersService.getUserById( id);

      if (user) {
        this.userService.signIn(name, id);
    }
    
  }
}


}
