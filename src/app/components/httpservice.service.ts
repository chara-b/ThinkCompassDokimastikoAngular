import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of,  throwError } from 'rxjs';
import { Todo } from '../post';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  readonly ROOT_URL = 'http://localhost:3000';  // URL to web api

  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

    // Post a Todo in db
    postTodo(_todo: Todo) {

      const todo = JSON.stringify(_todo); // this holds just the todo
  
      return this.http.post(this.ROOT_URL + '/api/addtodo', todo, this.httpOptions);
    }

    // Get Todos from db
    getTodos() {

      return this.http.get<any[]>(this.ROOT_URL + '/api/gettodos');
    }

    // Delete a Todo from db
    deleteTodo(id: Number) {

      return this.http.post(this.ROOT_URL + '/api/deletetodo', id, this.httpOptions);
    }

    // Delete Multiple Todos from db
    deleteMultipleTodo(ids: Number) {

      
      return this.http.post(this.ROOT_URL + '/api/deletemultipletodo', ids, this.httpOptions);
    }

    // Update a Todo status in db
    updateTodoStatus(_todo: Todo, id: Number) {

      const status = JSON.stringify(_todo.status); // this holds just the todo status only
  
      return this.http.post(this.ROOT_URL + '/api/updatetodostatus', [status, id], this.httpOptions);
    }

    // Update a Todos status in db
    updateMultipleTodosStatus(_todo: Todo, ids: Array<Number>) {

      const status = JSON.stringify(_todo.status); // this holds just the todo status only
  
      return this.http.post(this.ROOT_URL + '/api/updatemultipletodostatus', [status, ids], this.httpOptions);
    }
}
