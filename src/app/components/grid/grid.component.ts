import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { Todo } from 'src/app/post';
import { HttpserviceService } from '../httpservice.service';

export interface selectAll {
  todo: any;
  completed: boolean;
  color: ThemePalette;
  subSelects?: selectAll[];
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  tableIsLoading: boolean = false;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent;
  sortedTodos: Todo[] = [];

  selectAll: selectAll = {
    todo: 'ALL',
    completed: false,
    color: 'primary',
    subSelects: []
  };

  allComplete: boolean = false;


  constructor( private snackbar: MatSnackBar, private http: HttpserviceService, @Inject(DOCUMENT) private document: any, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    if(this.sortedTodos.length != 0 && this.selectAll.subSelects.length != 0){
      this.sortedTodos.length = 0;
      this.selectAll.subSelects.length = 0;
    }

    this.http.getTodos().subscribe((res: any) => {
      console.log(res)
      
      this.sortedTodos = res.slice();
      for (const todo of this.sortedTodos) {
        this.selectAll.subSelects.push({todo: todo, completed: false, color: 'primary'});
      }
    });

  }

  ngAfterViewInit() {

    setTimeout(() => { // arrow function here prevents the can not find 'this' error since it is 
      // out of scope when we call it inside setTimeout so the arrow function here solves this problem .. the other
      // method of .bind(this) to setTimeout didn't work it couldn't bind/bring 'this' inside the setTimeout scope
        /*automatos upologismos tou height gia olo to table afairontas to upsos tou pagination gia na einai sticky*/
        let todosWindow = this.document.getElementsByClassName('full-window');// the whole tbody area
        let todosScrollbar = this.document.getElementsByClassName('todos-scrollbar');//the scrollbar area inside tbody
        let responsiveHeight = todosWindow[0].offsetHeight-210;//whole window-the paginator height
  
        todosScrollbar[0].style.maxHeight = responsiveHeight + 'px';//so this way we get the subtracted
        // tbody height and we set it as our scrollbar's height in which the
        // scrollbar appears and in which the main content of the tbody must wraps since it is larger
    } , 500);
  }

    
  updateAllComplete() {
    this.allComplete = this.selectAll.subSelects != null && this.selectAll.subSelects.every(t => t.completed);
    console.log(this.selectAll.subSelects)
  }

  someComplete(): boolean {
    if (this.selectAll.subSelects == null) {
      return false;
    }
    return this.selectAll.subSelects.filter(t => t.completed).length > 0 && !this.allComplete;
  }
  
  setAllSelected(completed: boolean) {
    this.allComplete = completed;
    if (this.selectAll.subSelects == null) {
      return;
    }
    this.selectAll.subSelects.forEach(t => t.completed = completed);
  }


  sortTodos(sort: Sort) {
    const data = this.sortedTodos.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedTodos = data;
      return;
    }

    this.sortedTodos = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date_created':
          return compare(a.date_created, b.date_created, isAsc);
        case 'date_due':
          return compare(a.date_due, b.date_due, isAsc);
        default:
          return 0;
      }
    });
  }

  delete(){
    let completedTodosArray = this.selectAll.subSelects.filter(obj => {return obj.completed == true})
    if(completedTodosArray.length == 1) {// if equals with 1 this means that we have selected 1 todo to delete so call the respective api for 1 todo deletion
    
      const id = this.selectAll.subSelects[0].todo.id;

      this.http.deleteTodo(id).subscribe(res => {
        this.snackbar.open('todo just deleted', 'Dismiss', {duration: 5000})
        this.ngOnInit()
      });
  
  

    }else { // else call the api for multiple todos deletion
      let ids: Array<Number> = [];
      completedTodosArray.forEach(todo => {//this todo parameter here is a whole object with properties todo completed and color
        ids.push(todo.todo.id);
      });
      
      this.http.deleteMultipleTodo(ids).subscribe(res => {
        this.snackbar.open('todo just deleted', 'Dismiss', {duration: 5000})
        this.ngOnInit()
      });
  
    }
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
