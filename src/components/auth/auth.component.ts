import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
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
    password:new FormControl<string>('',[Validators.required]),
  })
  constructor(private authService:AuthService){}


  SignIn() {
    if(this.SignInForm.valid){
      this.authService.signIn(this.SignInForm.value.name as string,
      this.SignInForm.value.password as string);
    }
  }
}
