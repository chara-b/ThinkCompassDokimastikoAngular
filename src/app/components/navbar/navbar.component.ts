import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  checked = false;
  color: ThemePalette = 'accent';
  disabled = false;
  location: string = '/todos';

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

  }

  onChange(){
    this.checked = !this.checked
  }

  OpenPopUpToAddNewTodo(){
    
  }

  NavigateTotodos(){
    this.location = '/todos';
    this.router.navigate(['todos']);
  }
  NavigateToHistogram(){
    this.location = '/histogram';
    this.router.navigate(['histogram']);
  }
}
