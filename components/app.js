import {Component, View, bootstrap} from 'angular2/angular2';
import {TodoList} from 'components/todolist';
import {TodoNew} from 'components/todoNew';

@Component({
	selector: 'todo-app'
})
@View({
	templateUrl: 'views/todo.html',
	directives: [TodoList, TodoNew]
})

export class TodoApp {
	constructor(){
	}
}

bootstrap(TodoApp);