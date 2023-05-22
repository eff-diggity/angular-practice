import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// added
  constructor(private http: HttpClient) {}

  getData() {
    // have to import http module - pulled from https://jsonplaceholder.typicode.com/todos
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos')
  }
}
