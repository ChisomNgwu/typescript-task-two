"use strict";
// A simple Todo App
// TodoList class
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    // Add a new todo item with the given task and due date
    addTodo(task, dueDate) {
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
        };
        this.todos.push(newTodo);
    }
    // Mark a todo item with the given ID as completed
    completeTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
    // Remove a todo item with the given ID from the list
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
    // List all todos in the list
    listTodos() {
        return this.todos;
    }
    // Filter todos based on completion status
    filterTodos(completed) {
        return this.todos.filter(todo => todo.completed === completed);
    }
    // Update the task of a todo item with the given ID
    updateTodo(id, newTask) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.task = newTask;
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
    // Clear all completed todos from the list
    clearCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}
// Example Usage
const myTodoList = new TodoList();
myTodoList.addTodo("Buy groceries", new Date("2025-02-26"));
myTodoList.addTodo("TypeScript project", new Date("2025-02-30"));
myTodoList.addTodo("Complete bank project", new Date("2025-03-5"));
myTodoList.addTodo("Submit CV", new Date("2025-03-5"));
myTodoList.completeTodo(1);
myTodoList.completeTodo(2);
myTodoList.updateTodo(3, "Complete bank project");
myTodoList.updateTodo(4, "Submit CV");
console.log("All Todos:", myTodoList.listTodos());
console.log("Pending Todos:", myTodoList.filterTodos(false));
myTodoList.clearCompletedTodos();
console.log("After clearing completed Todos:", myTodoList.listTodos());
