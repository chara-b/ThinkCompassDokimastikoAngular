import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new-todo-dialog',
  templateUrl: './add-new-todo-dialog.component.html',
  styleUrls: ['./add-new-todo-dialog.component.css']
})
export class AddNewTodoDialogComponent implements OnInit {
  
  submitNewTodoForm: FormGroup;
  range: FormGroup;
  status = ['Working', 'New', 'Done', 'Cancelled'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
  selectedStatusOption = '';
  selectedMonthOption = '';

  constructor(private snackbar: MatSnackBar, public dialogRef: MatDialogRef<AddNewTodoDialogComponent>) { 

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

    const data = {
      keimeno: this.submitNewTodoForm.get('keimeno').value,
      date_created: this.range.get('start').value,
      date_due: this.range.get('end').value,
      status: this.submitNewTodoForm.get('status').value,
    }

    console.log(data);
    this.cancel();
    this.snackbar.open('todo data is printed in the console', 'Dismiss', {duration: 5000, panelClass: ['dark-snackbar']});

  }

  cancel(): void {
    this.dialogRef.close();
  }


}
