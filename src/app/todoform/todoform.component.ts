import { AuthenticationService } from './../authentication.service';
import { Subscription } from 'rxjs';
import { TodoService } from './../todo.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css'],
})
export class TodoformComponent implements OnInit {
  private userId!: number;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private authService:AuthenticationService
  ) {}

  ngOnInit() {
  }

  public addTodo(todoform: NgForm) {
    this.userId = this.authService.getUserId();
    todoform.value.users.id = this.userId;
    this.todoService.addTodo(this.userId, todoform.value).subscribe();
    todoform.resetForm();
    this.router.navigate([`users/todos`]);
  }
}
