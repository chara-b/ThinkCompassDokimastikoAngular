import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/post';
import { DataserviceService } from '../dataservice.service';
import { AddNewTodoDialogComponent } from './add-new-todo-dialog/add-new-todo-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//  @Output() newTodoSubmitted: EventEmitter<Todo> =  new EventEmitter;
  status = ['All', 'Working', 'New', 'Done', 'Cancelled'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  selectedStatusOption = ''; // the filter value in the navbar that the user typed
  selectedMonthOption = ''; // the filter value in the navbar that the user typed
  year = '';// the filter value in the navbar that the user typed
  keimeno = '';// the filter value in the navbar that the user typed
  checked = false;
  color: ThemePalette = 'accent';
  disabled = false;
  location: string = '/todos';

  constructor(private transferData: DataserviceService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
    transferData.status = this.selectedStatusOption;
    transferData.keimeno = this.keimeno;
    transferData.year = this.year;
    transferData.month = this.selectedMonthOption;
  }

  ngOnInit(): void {
    this.router.navigate(['todos']);
  }

  onChange(){
    this.checked = !this.checked
  }

  updateMonthObservableWithValueSelected(option: string) {
    this.transferData.changeMonth(option);
  }

  updateKeimenoObservableWithValueSelected() {
    this.transferData.changeKeimeno(this.keimeno);
  }

  updateYearObservableWithValueSelected() {
    this.transferData.changeYear(this.year);
  }

  updateStatusObservableWithValueSelected(option: string) {
    this.transferData.changeStatus(option);
  }




  OpenPopUpToAddNewTodo(){

      const dialogRef = this.dialog.open(AddNewTodoDialogComponent, { // open the component AddOrgDialogComponent inside an angular material dialog popup
        width: '300px',
        panelClass: 'app-add-new-todo-dialog',
        disableClose: true,
        position: { top: '10px' },
        data: {
            // no data to pass inside the modal for now
        }
      });

      dialogRef.afterClosed().subscribe(result => {
      
      })  

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
