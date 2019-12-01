import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './TodoListApp';
import { render, getByTestId, fireEvent } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoListApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('add & store todo', () => {
  const { container } = render(<TodoListApp />)
  const inputName = getByTestId(container, "inputTodoName");


  const NewTodoName = "clean floor"
  fireEvent.change(inputName, { target: { value: NewTodoName } });
  fireEvent.keyPress(inputName, { key: "Enter", code: 13, charCode: 13 })

  expect((getByTestId(container, "todoValue0") as HTMLInputElement).value).toBe(NewTodoName)
  expect(JSON.parse(window.localStorage.getItem('todos')!)[0].text).toBe(NewTodoName)
})

test('get todo from localStorage', () => {
  window.localStorage.setItem('todos', JSON.stringify([{ "id": "PYPWoM6_", "text": "clean dish", "isCompleted": false }, { "id": "PYPWoM7_", "text": "clean floor", "isCompleted": false }]))
  const { container } = render(<TodoListApp />)

  expect((getByTestId(container, "todoValue0") as HTMLInputElement).value).toBe('clean dish')
})