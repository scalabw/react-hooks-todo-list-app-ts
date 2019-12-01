import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
// Import interfaces
import { ITodo } from './interfaces'
// Import styles
import './styles/styles.css'

const TodoListApp: React.FC = () => {

  // Initialize the todos to the local saved data
  const initialState = () => JSON.parse(localStorage.getItem("todos")!) || []

  // Hooks
  const [todos, setTodos] = useState<ITodo[]>(initialState)

  // Save the data when updated and only when the todos value changed
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleTodoCreate(todo: ITodo) {
    // Prepare new todos state
    const newTodosState: ITodo[] = [...todos]
    // Update new todos state
    newTodosState.push(todo)
    // Update todos state
    setTodos(newTodosState)
  }

  // Update existing todo item
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    // Prepare new todos state
    const newTodosState: ITodo[] = [...todos]
    // Find correct todo item to update
    newTodosState.find((todo: ITodo) => todo.id === id)!.text = event.target.value
    // Update todos state
    setTodos(newTodosState)
  }

  // Remove existing todo item
  function handleTodoRemove(id: string) {
    // Prepare new todos state
    const newTodosState: ITodo[] = todos.filter((todo: ITodo) => todo.id !== id)
    // Update todos state
    setTodos(newTodosState)
  }

  // Check existing todo item as completed
  function handleTodoComplete(id: string) {
    // Copy current todos state
    const newTodosState: ITodo[] = [...todos]
    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: ITodo) => todo.id === id)!.isCompleted = !newTodosState.find((todo: ITodo) => todo.id === id)!.isCompleted
    // Update todos state
    setTodos(newTodosState)
  }
  // Check if todo item has title
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    } else {
      event.target.classList.remove('todo-input-error')
    }
  }
  return (
    <div className="todo-list-app" data-testid="todosvalue">
      {/* Todo form component */}
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />
      {/* Todo list component */}
      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
      />
    </div>
  )
}


export default TodoListApp;
