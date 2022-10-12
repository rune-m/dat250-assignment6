import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/assets/todo';
import { TodosService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ex2';
}
