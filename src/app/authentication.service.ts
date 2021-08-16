import { NgForm } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { UsersService } from './users.service';
import { Users } from './users';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private userService: UsersService) {}
  private username!:string;
  private isValid:boolean = true;

  authenticate(loginForm: NgForm): boolean {
    this.username = loginForm.value.username;
    
    this.userService.logUserIn(loginForm).subscribe(
      (response)=>{
        localStorage.setItem('username',this.username);
    
        this.userService.getUser(this.username).subscribe(
          (response:Users)=>{
           
            localStorage.setItem('user_id',(response.id).toString());
          
          }
        );
          
      },
      (error:HttpErrorResponse)=>{
        
        this.isValid = false;
      }
     
    );

    
    return this.isValid;
  }



  getUser(){
    return localStorage.getItem('username') as string;
  }

  getUserId(){
    return Number(localStorage.getItem('user_id') as string);
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('username');
    let userid = localStorage.getItem('user_id');
    return (!(user === null)) && (!(userid === null));
  }
  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
    
    this.userService.logOutUser().subscribe();
  }
}
