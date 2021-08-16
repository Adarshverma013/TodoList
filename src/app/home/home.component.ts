import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public username:string = "User";

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    if(this.authService.isUserLoggedIn())
    {
      this.username = (this.authService.getUser() as string);
    }
  }

}
