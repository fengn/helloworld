import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from "../../providers/todo/todo";
import { ArchivedTodosPage } from "../archived-todos/archived-todos";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public todos = [];
  public reorderIsEnabled = false;
  public archivedTodosPage = ArchivedTodosPage;

  constructor(private toastController: ToastController,private todoProvider: TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
  	this.todos = this.todoProvider.getTodos();
  }

  toggleReorder(){
  	this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReorder($event){
    reorderArray(this.todos, $event);
  }

  archiveTodo(todoIndex){
  	this.todoProvider.archiveTodo(todoIndex);
  }

  editTodo(todoIndex){
  	let editTodoAlert = this.alertController.create({
	    title: 'Edit A Todo',
	    subTitle: 'Edit Your Todo',
	    inputs:[
	    {
	    	type: "text",
	    	name: "editTodoInput",
	    	value: this.todos[todoIndex]
	    }
	    ],
	    buttons: [
	    {
	    	text: "Cancel"
	    },{
	    	text:"Edit Todo",
	    	handler: (inputData)=>{
	    		let todoText;
	    		todoText = inputData.editTodoInput;
	    		this.todoProvider.editTodo(todoText, todoIndex);

	    		editTodoAlert.onDidDismiss(()=>{

		    		let addTodoToast = this.toastController.create({
		    			message: "Todo edited",
	            duration: 2000
		    		});
		    		addTodoToast.present();
	    		});

	    	}
	    }]
		});
		editTodoAlert.present();
  }

  openTodoAlert(){
		let addTodoAlert = this.alertController.create({
	    title: 'Add A Todo',
	    subTitle: 'Enter Your Todo',
	    inputs:[
	    {
	    	type: "text",
	    	name: "addTodoInput"
	    }
	    ],
	    buttons: [
	    {
	    	text: "Cancel"
	    },{
	    	text:"Add Todo",
	    	handler: (inputData)=>{
	    		let todoText;
	    		todoText = inputData.addTodoInput;
	    		this.todoProvider.addTodo(todoText);

	    		addTodoAlert.onDidDismiss(()=>{

		    		let addTodoToast = this.toastController.create({
		    			message: "Todo added",
	            duration: 2000
		    		});
		    		addTodoToast.present();
	    		});

	    	}
	    }]
		});
		addTodoAlert.present();
	}


}
