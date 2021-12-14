import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, ArrayOfParentComponents } from './app-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from './components/navbar/filters/filters.component';
import { AddNewTodoDialogComponent } from './components/navbar/add-new-todo-dialog/add-new-todo-dialog.component';
import { HttpserviceService } from './components/httpservice.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    FiltersComponent,
    AddNewTodoDialogComponent,
    ArrayOfParentComponents // this array holds AppComponent and GridComponent declarations .. it is exported at app-routing.module.ts and since we wrap the declarations in this array we don't need to declare those components separately again as the rest components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSortModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
