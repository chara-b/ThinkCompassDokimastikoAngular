import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() location: string = ''; // this comes here from the navbar component as a property binding inside the element of the app-filters component in the html file
  @Input() checked: boolean = false;

  status = ['Working', 'New', 'Done', 'Cancelled'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
  selectedStatusOption = '';
  selectedMonthOption = '';
  
  constructor() { }

  ngOnInit(): void {
  }


}
