import { Users } from './users';

export interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
  users: Users;
}
