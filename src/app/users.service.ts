import { NgForm } from '@angular/forms';
import { Users } from './users';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiServerUrl = '/api';
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiServerUrl}/user/all`);
  }

  public logUserIn(loginForm:NgForm) {
    let formData: FormData = new FormData(); 
    formData.append('username', loginForm.value.username); 
    formData.append('password', loginForm.value.password); 
    return this.http.post(`${this.apiServerUrl}/authentication`,formData);
  }
  public logOutUser():Observable<void>{
    return this.http.get<void>(`${this.apiServerUrl}/logout`);
  }
  public getUser(username: string): Observable<Users> {

    return this.http.get<Users>(`${this.apiServerUrl}/user/${username}`);
  }

  public addUsers(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.apiServerUrl}/user/add`, user);
  }

  public updateUsers(user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.apiServerUrl}/user/update`, user);
  }

  public deleteUsers(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
  }
}
