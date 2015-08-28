import {Component, View, bootstrap, For, EventEmitter} from 'angular2/angular2';
import { Inject, bind } from 'angular2/di';
import {TodoListService} from 'services/TodoList';

@Component({
	selector: 'todo-list',
	injectables: [bind('TodoListService').toValue(TodoListService)]
})
@View({
	templateUrl: 'views/todolist.html',
	directives: [For]
})

export class TodoList {
	constructor(@Inject('TodoListService') TodoListService){
		this.items = TodoListService;
	}

	completedToDo(todo){
		todo.isCompleted = true;
	}
}

bootstrap(TodoList);