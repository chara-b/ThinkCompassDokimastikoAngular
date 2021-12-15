import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of,  throwError } from 'rxjs';
import { Todo, TodoWithId } from '../post';

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

      return this.http.post(this.ROOT_URL + '/api/gettodos', this.httpOptions);
    }

    // Delete a Todo from db
    deleteTodo(_id: Number) {
      const id_ = {id: _id}
      const id = JSON.stringify(id_)
      return this.http.post(this.ROOT_URL + '/api/deletetodo', id, this.httpOptions);
    }

    // Delete Multiple Todos from db
    deleteMultipleTodo(_ids: Array<Number>) {
      const ids_ = {ids: _ids}
      const ids = JSON.stringify(ids_)      
      return this.http.post(this.ROOT_URL + '/api/deletemultipletodo', ids, this.httpOptions);
    }

    // Update a Todo status in db
    updateTodoStatus(todo_status_value_plus_id_value_as_object: object) { // to update we don't only need the id but the status value accordingly

      //todo_status_value_plus_id_value_as_object looks like this {status: todo.status, id: todo.id}; 
      const status_plus_id = JSON.stringify(todo_status_value_plus_id_value_as_object);
      return this.http.post(this.ROOT_URL + '/api/updatetodostatus', status_plus_id, this.httpOptions);
    }

    // Update multiple Todos status in db
    updateMultipleTodosStatus(status_plus_ids_: object) { //status_plus_ids is an object where the 2nd property is an array of ids

      const status_plus_ids = JSON.stringify(status_plus_ids_);
  
      return this.http.post(this.ROOT_URL + '/api/updatemultipletodostatus', status_plus_ids, this.httpOptions);
    }
}
