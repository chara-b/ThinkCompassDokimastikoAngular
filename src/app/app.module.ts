import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FiltersComponent } from './components/navbar/filters/filters.component';
import { AddNewTodoDialogComponent } from './components/navbar/add-new-todo-dialog/add-new-todo-dialog.component';
import { HistogramComponent } from './components/navbar/histogram/histogram.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ButtonComponent,
    NavbarComponent,
    FiltersComponent,
    AddNewTodoDialogComponent,
    HistogramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
