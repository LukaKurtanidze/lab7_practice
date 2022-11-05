import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url= 'https://jsonplaceholder.typicode.com/users'

  getUsers() {
    return this.http.get<User[]>(this.url)
  }
  getUserTodos(userId:number) {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
  }
  constructor(private http: HttpClient) { }
}


export interface User {
  "id": number;
    "name": string;
    "username": string;
    "email": string;
    "address": Adress;
    "phone": string;
    "website": string;
    "company":Company;
  }
  
  export interface Adress {
    "street": string;
    "suite": string;
    "city": string;
    "zipcode": string;
    "geo": {
      "lat": number;
      "lng": number;
    };
}

export interface Company {
  "name": string;
  "catchPhrase": string;
  "bs": string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}