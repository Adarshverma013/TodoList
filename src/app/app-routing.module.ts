import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodoComponent } from './todo/todo.component';
import { UserformComponent } from './userform/userform.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  {
    path: 'adduserForm',
    component: UserformComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'users/todos',
    component: TodoComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'users/todos/addTodoForm',
    component: TodoformComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: UserformComponent },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path:'changePassword',
    component: ChangePasswordComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
