import { UsersService } from './../users.service';
import { AuthenticationService } from './../authentication.service';
import { Users } from './../users';
import { HttpErrorResponse } from '@angular/common/http';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public todos!: Todo[];
  private user_id!: number;
  private todo!: Todo;

  constructor(
    private todoService: TodoService,
    private userService:UsersService,
    private router: Router,
    private authService:AuthenticationService
  ) {}

    

  ngOnInit() {
    
    this.user_id = this.authService.getUserId();
    
    this.getTodos(this.user_id);
  }

  public getTodos(id: number): void {
    this.todoService.getTodos(id).subscribe(
      (response: Todo[]) => {
        this.todos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteTodo(todoId: number) {
    this.todoService.deleteTodo(this.user_id, todoId).subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.getTodos(this.user_id);
  }

  public redirectToForm() {
    this.router.navigate([`users/todos/addTodoForm`]);
  }

  public handleCheckbox(todoId: number) {
    this.todoService.getTodoById(this.user_id, todoId).subscribe(
      (response: Todo) => {
        this.todo = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    this.todo.done = !this.todo.done;
    this.todoService.addTodo(this.user_id, this.todo).subscribe();
    this.router.navigate([`users/todos/${this.user_id}`]);
  }
}
