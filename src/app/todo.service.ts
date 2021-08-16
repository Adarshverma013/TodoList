import { Todo } from './todo';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiServerUrl = '/api';

  constructor(private http: HttpClient) {}

  public getTodos(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiServerUrl}/user/${id}/todo`);
  }

  public getTodoById(userId: number, todoId: number): Observable<Todo> {
    return this.http.get<Todo>(
      `${this.apiServerUrl}/user/${userId}/todo/${todoId}`
    );
  }

  public addTodo(user_id: number, todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      `${this.apiServerUrl}/user/${user_id}/todo`,
      todo
    );
  }

  public deleteTodo(userId: number, todoId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/user/${userId}/todo/${todoId}`
    );
  }
}

// public addUsers(user: Users): Observable<Users>{
//   return this.http.post<Users>(`${this.apiServerUrl}/user/add`,user);
// }

// public updateUsers(user: Users): Observable<Users>{
//   return this.http.post<Users>(`${this.apiServerUrl}/user/add`,user);
// }

// public deleteUsers(userId: number): Observable<void>{
//   return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
// }
