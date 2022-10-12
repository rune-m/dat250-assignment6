import { Observable } from 'rxjs';
import { Todo } from 'src/assets/todo';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';

@Injectable()
export class TodosService {
  todosUrl = 'http://localhost:8080/todos';
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.todosUrl)
      .pipe(catchError(this.handleError('getHeroes', [])));
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.todosUrl, todo)
      .pipe(catchError(this.handleError('addTodo', todo)));
  }

  deleteHero(id: number): Observable<unknown> {
    const url = `${this.todosUrl}/${id}`; // DELETE api/heroes/42
    return this.http
      .delete(url)
      .pipe(catchError(this.handleError('deleteTodo')));
  }
}
