import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-status-dialog',
  templateUrl: './edit-status-dialog.component.html',
  styleUrls: ['./edit-status-dialog.component.css']
})
export class EditStatusDialogComponent implements OnInit {
  status = ['Working', 'New', 'Done', 'Cancelled'];
  selectedStatusOption = '';

  constructor(public dialogRef: MatDialogRef<EditStatusDialogComponent>) { }

  ngOnInit(): void {
  }

  edit_todo(): void {
    
    this.dialogRef.close({ event: 'close', status: this.selectedStatusOption });
    
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
