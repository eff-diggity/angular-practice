import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// auto-added when created the home/about paths below -if doesnt have to add manually! always check!
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodosItemComponent } from './todos/todos-item/todos-item.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';


// sets so .com loads home page(component),  .com/about opens about page(components)
const routes: Routes = [
  {  // p/o= home works! on .com
  path:'', component: HomeComponent
  },
  {  // p/o= about works on .com/about
  path:'about', component: AboutComponent
  },
  // {path: 'todos', component: TodosListComponent} would autoload 

  // for lazy loading, and Todosmodule comes from todos.mod.ts export class
  { 
    path:'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
