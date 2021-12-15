import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { HttpserviceService } from '../../httpservice.service';

@Component({
  selector: 'app-add-new-todo-dialog',
  templateUrl: './add-new-todo-dialog.component.html',
  styleUrls: ['./add-new-todo-dialog.component.css']
})
export class AddNewTodoDialogComponent implements OnInit {
  
  submitNewTodoForm: FormGroup;
  range: FormGroup;
  status = ['Working', 'New', 'Done', 'Cancelled'];
  selectedStatusOption = '';



  constructor( private http: HttpserviceService, private snackbar: MatSnackBar, public dialogRef: MatDialogRef<AddNewTodoDialogComponent>) { 

    this.submitNewTodoForm = new FormGroup({
      keimeno: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });

    this.range =  new FormGroup({
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
    });

  }

  ngOnInit(): void {

  }


  save_todo(): void {
    const momentDateCreated = new Date(this.range.get('start').value); // Replace event.value with your date value
    const formattedDateCreated = moment(momentDateCreated).format("YYYY-MM-DD");
    console.log(formattedDateCreated)

    const momentDateDue = new Date(this.range.get('end').value); // Replace event.value with your date value
    const formattedDateDue = moment(momentDateDue).format("YYYY-MM-DD");
    console.log(formattedDateDue)
    
    const todo = {
      keimeno: this.submitNewTodoForm.get('keimeno').value,
      date_created: formattedDateCreated,
      date_due: formattedDateDue,
      status: this.submitNewTodoForm.get('status').value,
    }
     this.http.postTodo(todo).subscribe(res => this.snackbar.open('todo just posted', 'Dismiss', {duration: 5000}));


    console.log(todo);
    this.cancel();
    
  }


  cancel(): void {
    this.dialogRef.close();
  }


}
