import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of,  throwError } from 'rxjs';
import { Todo } from '../post';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  readonly ROOT_URL = 'http://localhost:3000/';  // URL to web api

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
}
