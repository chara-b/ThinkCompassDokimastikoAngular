import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/post';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  public graph = {
    data: [
       // { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1,2,3], y: [2,6,3], type: 'bar' },
    ],
    layout: {autosize: true, title: 'Todos Done Per Day (Due Date is taken for this plot considered)', xaxis: {type:'category'}}
  };
  todos_done:any = []
  groupedTodosOverDate_Due: any;
  dates: any = [];
  done: any = [];

  constructor(private http: HttpserviceService) { }

  ngOnInit(): void {
    this.http.getTodos().subscribe((res: any) => {
      console.log(res)
  
      this.groupedTodosOverDate_Due = groupBy(res, 'date_due')

      console.log(this.groupedTodosOverDate_Due)

      Object.entries(this.groupedTodosOverDate_Due).forEach(([key, value]) => {
        this.dates.push(key)
        this.todos_done.push(value)
      })
      console.log(this.dates)
      console.log(this.todos_done)

      this.todos_done.forEach((tododone:any) => {
        this.done.push(tododone.length)
      });
      console.log(this.done)
      this.graph = {
        data: [
           // { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
            { x: this.dates, y: this.done, type: 'bar' },
        ],
        layout: {autosize: true, title: 'Todos Done Per Day (Due Date is taken for this plot considered)', xaxis: {type:'category'}},

      };
      console.log(this.graph.data)
    });
  }

}

function groupBy(objectArray:Array<object>, property:string) { // group by same date string 
  // found this function here --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Grouping_objects_by_a_property
// episis edo allaksa ligo tin domi tis function pou brika sto parapano link oste na einai simbati me ton
// array of objects pou tis dino na mou kanei group...
  return objectArray.reduce((acc:any, obj:any) => { 
  let key = obj[property] // the key of each group in the final array result
  if (!acc[key]) { // if the above key doesn't exist in the accumulator array/the final array with the groups that's what accumulator means
      acc[key] = [] // add an array ready to be filled with objects inside that reflect the key/each group array inside accumulator array in other words
  }
  if(obj.status === 'Done') { // if you find an object with the date string that we want to group get it and push it into corresponding group array... 
      acc[key].push(obj)
  }
  return acc
  }, []);
}
