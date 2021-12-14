import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ArrayOfParentComponents } from './app-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from './components/navbar/filters/filters.component';
import { AddNewTodoDialogComponent } from './components/navbar/add-new-todo-dialog/add-new-todo-dialog.component';


@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    FiltersComponent,
    AddNewTodoDialogComponent,
    ArrayOfParentComponents // this array holds AppComponent and GridComponent declarations .. it is exported at app-routing.module.ts and since we wrap the declarations in this array we don't need to declare those components separately again as the rest components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ArrayOfParentComponents[0]] //ArrayOfParentComponents[0] holds our AppComponent.. this array is exported inside app-routing.module.ts
})
export class AppModule { }
