import { Component, OnInit } from '@angular/core';
// added with fake json data in data.service.ts
import { DataService } from '../../services/data.service';
// added with todos.ts interface
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
  // new property added with todos.ts interface so  any datatypes other than specified wont work
  todo: Todo[];

  // added with fake json data in data.service.ts
  constructor(private dataService: DataService) {}

  // not sure if I need this?
  ngOnInit() {
    this.dataService.getData().subscribe((data) => console.log(data));
  }
}
