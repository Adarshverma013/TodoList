import { AuthenticationService } from './authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  constructor(public loginService: AuthenticationService) {}

  title = 'todoapp';
}
