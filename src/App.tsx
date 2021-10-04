import { useState, useEffect, useMemo, useCallback, SetStateAction } from 'react'

import List, { Todo } from './List/List'

const initialTodos = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
]

function App() {
  const [todoList, setTodoList] = useState(initialTodos)
  const [task, setTask] = useState('')
  const [term, setTerm] = useState('')

  useEffect(() => {
    console.log('Rendering <App />')
  })

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => setTask(e.target.value)

  const handleCreate = () => {

    const newTodo = { id: Date.now(), task }

    setTodoList([...todoList, newTodo])

    setTask('')
  }

  const handleSearch = () => {
    setTerm(task)
  }

  const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId)
    setTodoList(newTodoList)
  }, [todoList])

  const filteredTodoList = useMemo(() => todoList.filter((todo: Todo) => {
    console.log('Filtering...')
    return todo.task.toLocaleLowerCase().includes(term.toLocaleLowerCase())
  }), [term, todoList])

  const printTodoList = useCallback(() => {
    console.log('Changing todoList', todoList)
  }, [todoList])

  useEffect(() => { printTodoList() }, [todoList])



  return (
    <>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={filteredTodoList} handleDelete={handleDelete} />
    </>
  )
} export default App