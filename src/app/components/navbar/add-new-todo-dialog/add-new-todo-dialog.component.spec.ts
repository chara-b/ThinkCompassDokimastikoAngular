import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTodoDialogComponent } from './add-new-todo-dialog.component';

describe('AddNewTodoDialogComponent', () => {
  let component: AddNewTodoDialogComponent;
  let fixture: ComponentFixture<AddNewTodoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTodoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
