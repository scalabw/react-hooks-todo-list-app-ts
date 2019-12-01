
// Todo interface
export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

// Todo form interface
export interface ITodoForm {
  todos: ITodo[];
  handleTodoCreate: (todo: ITodo) => void;
}

// Todo list interface
export interface ITodoList {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: ITodo[]
}

// Todo item interface
export interface ITodoItem {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: ITodo;
  index: Number;
}