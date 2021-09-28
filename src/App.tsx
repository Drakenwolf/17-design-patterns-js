import { useState, useEffect, useMemo, useCallback } from 'react'

import List, { Todo } from './List/List'

const initialTodos = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
]

function App() {
  const [todoList, setTodoList] = useState(initialTodos)
  const [task, setTask] = useState('')


  useEffect(() => {
    console.log('Rendering <App />')
  })

  const handleCreate = () => {

    const newTodo = { id: Date.now(), task }

    setTodoList([...todoList, newTodo])

    setTask('')
  }

  return (
    <>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      <List todoList={todoList} />
    </>
  )
} export default App