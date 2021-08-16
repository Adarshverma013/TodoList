import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Users } from '../users';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  public onAddUser(addForm: NgForm) {
    if (addForm.value.password != addForm.value.confPassword) {
      addForm.resetForm();
      alert('Password mismatch with confirm password');
      this.router.navigate(['signup']);
      
    } else{
      this.usersService.addUsers(addForm.value).subscribe(
        (response: Users) => {
          addForm.resetForm();
          alert("Registration successful consider signing in.");
          this.router.navigate(['login']);
        },
        (error: HttpErrorResponse) => {
          alert("Username or email already exists!!");
          addForm.resetForm();
        }
      );
    }
  }
}
