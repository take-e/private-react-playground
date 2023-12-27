import Todo from "./Todo";
import type { TodoType, ToggleTodo } from "./Todo";

export type TodoListProps = {
  todoItems: TodoType[]
  toggleTodo: ToggleTodo
}

const TodoList = ({ todoItems, toggleTodo }: TodoListProps) => {
  return (
  <ul>
    {todoItems.map((todo) => (
      <Todo key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } />
    ))}
  </ul>
  )
}

export default TodoList;