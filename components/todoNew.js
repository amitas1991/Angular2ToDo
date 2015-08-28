import {Component, View, bootstrap} from 'angular2/angular2';
import { Inject, bind } from 'angular2/di';
import {TodoListService} from 'services/TodoList';

@Component({
	selector: 'todo-new',
	injectables: [ bind('TodoListService').toValue(TodoListService)]
})
@View({
	templateUrl: 'views/todoNew.html'
})

export class TodoNew {
	constructor(@Inject('TodoListService') TodoListService){
		this.items = TodoListService;		
	}

	addTodo (todo) {
		this.items.push({value: todo.value, isCompleted: false});
		todo.value =""	;
	}

}

bootstrap(TodoNew);