import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService,private authservice: AuthenticationService,private router:Router) { }

  ngOnInit(){
    this.getUsers();
  }

  public user!: Users;
  
  public getUsers(): void {
    
    this.usersService.getUser(this.authservice.getUser() as string).subscribe(
      (response: Users) => {
        this.user = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public deleteUser(id:number){
    this.usersService.deleteUsers(id).subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.authservice.logOut();
    this.router.navigate(['']);
  }

}
