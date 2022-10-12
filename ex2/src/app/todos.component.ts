import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Todo } from '../assets/todo';
import { TodosService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  providers: [TodosService],
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  editTodo: Todo | undefined;
  inputSummary = '';
  inputDescription = '';

  constructor(private todoService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  add(summary: string, description: string): void {
    this.editTodo = undefined;
    if (!summary) {
      return;
    }
    const newTodo: Todo = { summary, description } as Todo;
    this.todoService
      .addTodo(newTodo)
      .subscribe((todo) => this.todos.push(todo));
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todoService.deleteHero(todo.id).subscribe();
  }

  refresh(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }
}
