import { NgForm } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private loginservice: AuthenticationService
  ) {}

  ngOnInit(): void {}

  checkLogin(loginForm: NgForm) {
    if (this.loginservice.authenticate(loginForm)) {
      this.router.navigate(['']);
    } else {
      loginForm.resetForm();
      alert("Invalid credentials!!");
      this.router.navigate(['login']);
    }
  }
}
