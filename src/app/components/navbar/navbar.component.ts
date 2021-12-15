import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddNewTodoDialogComponent } from './add-new-todo-dialog/add-new-todo-dialog.component';

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

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.router.navigate(['todos']);
  }

  onChange(){
    this.checked = !this.checked
  }

  OpenPopUpToAddNewTodo(){

      const dialogRef = this.dialog.open(AddNewTodoDialogComponent, { // open the component AddOrgDialogComponent inside an angular material dialog popup
        width: '500px',
        panelClass: 'app-add-new-todo-dialog',
        disableClose: false,
        position: { top: '10px' },
        data: {
            // no data to pass inside the modal for now
        }
      });

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
