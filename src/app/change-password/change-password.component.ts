import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { UsersService } from './../users.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Users} from './../users';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private user!:Users;
  constructor(private userService:UsersService,private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getUser(this.authService.getUser()).subscribe(
      (res:Users)=>{
        this.user = res;
      }
    );
  }

  changePassword(form:NgForm)
  {
    if(form.value.newpassword != form.value.cnfnewpassword)
    {
      alert("Password Mismatch");
      form.resetForm();
    }
    else{
      this.user.password = form.value.newpassword;
      this.userService.updateUsers(this.user).subscribe();
      form.resetForm();
      alert("Password Successfully Changed");
      this.router.navigate(['']);
    }
  }

}
