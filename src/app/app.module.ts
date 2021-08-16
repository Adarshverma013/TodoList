
import { UsersService } from './users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserformComponent } from './userform/userform.component';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todoform/todoform.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserformComponent,
    TodoComponent,
    TodoformComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
