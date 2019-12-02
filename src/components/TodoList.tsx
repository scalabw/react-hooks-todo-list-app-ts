// Import dependencies
import React from 'react'
// Import TodoItem
import TodoItem from './TodoItem'
// Import interfaces
import { ITodoList } from './../interfaces'

// TodoList component
const TodoList = (props: ITodoList) => {
  return (
    <div className="todo-list" >
      <ul>
        {props.todos.map((todo, index) => (
          <li key={todo.id}>
            <TodoItem
              index={index}
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
              handleTodoBlur={props.handleTodoBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TodoList