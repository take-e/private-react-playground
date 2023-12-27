export type TodoType = {
  name: string
  id: string
  isCompleted: boolean
}

export type ToggleTodo = (id: string) => void

export type TodoProps = {
  todo: TodoType
  toggleTodo: ToggleTodo
}


const Todo = ({ todo, toggleTodo }: TodoProps) => {

  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }

  return (
    <li key={ todo.id } className='listItem'>
      <div>
        <label>
          <input
            type="checkbox"
            checked={ todo.isCompleted }
            readOnly
            onChange={ handleTodoClick }
          />
        </label>
        { todo.name }
      </div>
    </li>
  )
}

export default Todo