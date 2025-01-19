import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: { name: string; password: string } = {
    name: '', 
    password: '',
  }
public isAuth:boolean =false;
  constructor(private router:Router) { }

  getAuth(){
    return this.auth;
  }

  signIn(name:string,password:string){
    this.auth.name=name;
    this.auth.password=password;
    this.isAuth=true;
    // this.router.navigate(['/dashboard']);
  }
  signOut(){
    this.isAuth=false;
    this.router.navigate(['/auth']);
  }

}
