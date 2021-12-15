import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatusDialogComponent } from './edit-status-dialog.component';

describe('EditStatusDialogComponent', () => {
  let component: EditStatusDialogComponent;
  let fixture: ComponentFixture<EditStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStatusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
