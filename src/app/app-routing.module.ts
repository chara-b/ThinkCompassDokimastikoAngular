import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { HistogramComponent } from './components/histogram/histogram.component';

const routes: Routes = [
// we have one path route here the AppComponent which has 2 children routes the GridComponent and the HistogramComponent
// It is critical as there are views that the user should not be able to access unless they are in a particular view. This way, the structure becomes tree-like
/* after we insert into the constructor of the parent component the route: ActivatedRoute and the router: Router we
can fire by clicking on a button the navigation to the child path as relative path to the parent path
so angular does something like a concatenation to the path string, so to do so we do this
this.router.navigate(['todos'], {relativeTo:this.route}); inside corresponding method that fires on the click of a button.. where
this.route must be the path of the parent component that is defined here as the parent of the child
this whole thing happens because some views must be accessible only after the user has entered a specific view where the other views
are children of this view */

  {
    path:'', component: AppComponent,
    children: [
      {
        path:'todos', component: GridComponent
      },
      {
        path:'histogram', component: HistogramComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// We have also tied our parent components to an array so we do not have to import the three components everywhere we need to use them, but just import the array instead.
export const ArrayOfParentComponents = [AppComponent, GridComponent, HistogramComponent]
