import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';

const routes: Routes = [
  // module specific routes so  path can be blank b/c already defined in app-routing.mod.ts so it already reads as todos/
{path: '', component: TodosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
