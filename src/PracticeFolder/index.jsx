import React, { useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'
import './styles.css'


export default function Todo() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useLocalStorage("todos", [])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }]
    })
    setNewItem("")
  }

  //Update the todos by Changing the id of the todo to be completed
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter((todo) => todo.id !== id)
      // If my todo.id is not (!==) id, then i want to keep it otherwise remove it
    })
  }
  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <div>
          <label htmlFor="item">New Item</label>
          <input value={newItem} required onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button>Add</button>
      </form>
      <h1>Todo List</h1>

      <ul className="todo-list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
              {todo.title}
            </label>
            <button onClick={() => { deleteTodo(todo.id) }}>delete</button>
          </li>
        })}

      </ul>
    </div>

  )
}
