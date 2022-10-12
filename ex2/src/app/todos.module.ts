import { NgModule } from '@angular/core';

import { TodosComponent } from './todos.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent],
  exports: [TodosComponent],
  imports: [CommonModule, FormsModule],
})
export class TodosModule {}
