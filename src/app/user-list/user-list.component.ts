import { Component, OnInit } from '@angular/core';
import { Todo, User, UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[] = [];
  loading:boolean = false;
  todos:Todo[] = [];
  selectedUserId: number;

  loadTodo(userId:number) {
    this.selectedUserId = userId;
    this.userService.getUserTodos(userId).subscribe(data => {
      this.todos = data
    })
  }

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().subscribe(data => {
      this.users = data
    })
    this.loading = false;
  }

}
