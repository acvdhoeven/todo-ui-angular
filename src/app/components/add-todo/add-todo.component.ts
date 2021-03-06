import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {

  title: string;

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const todo = {
      title: this.title,
      completed: false
    };
    this.addTodo.emit(todo);
    this.title = '';
  }

}
