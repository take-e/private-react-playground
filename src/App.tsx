import './App.css';
import { useState } from "react";
import TodoList from './components/TodoList'
import { TodoType } from './components/Todo';
import { v4 as uuid } from 'uuid';

function App() {
  const [todoItems, setTodoItems] = useState([] as TodoType[])
  const [todoText, setTodoText] = useState('')

  const toggleTodo = (id: string) => {
    const newTodoItems = [...todoItems]
    const todo = newTodoItems.find((todo) => todo.id === id)

    if (!todo) {
      throw new Error("todo item not found")
    }

    todo.isCompleted = !todo.isCompleted
    setTodoItems(newTodoItems)
  }

  const handleAddTodo = () => {
    if (todoText === "") return

    setTodoItems((prev) => {
      return [...prev, { id: uuid(), name: todoText, isCompleted: false }]
    })
  
    setTodoText('')
  }

  const handleClear = () => {
    const newTodoItems = todoItems.filter((todo) => !todo.isCompleted)
    setTodoItems(newTodoItems)
  }

  return (
    <>
      <TodoList todoItems={ todoItems } toggleTodo={ toggleTodo } />
      <input className="border border-blue-700 rounded" type="text" name="" id="" value={ todoText } onChange={ (e) => setTodoText(e.target.value)} />
      <button className="mx-2 px-2 py-1 bg-blue-500 rounded text-white" onClick={ handleAddTodo }>追加</button>
      <button className="mx-2 px-2 py-1 rounded bg-red-400 text-white" onClick={ handleClear }>完了したタスクを削除</button>
      <div>残タスク数：{ todoItems.filter((todo) => !todo.isCompleted).length }</div>
    </>
  )
}

export default App;
