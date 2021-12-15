import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';


export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
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

  desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];

  sortedData: Dessert[];

  constructor(@Inject(DOCUMENT) private document: any, public dialog: MatDialog) {
    this.sortedData = this.desserts.slice();
  }

  ngOnInit(): void {
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


  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date_created':
          return compare(a.fat, b.fat, isAsc);
        case 'date_due':
          return compare(a.carbs, b.carbs, isAsc);
        default:
          return 0;
      }
    });
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
