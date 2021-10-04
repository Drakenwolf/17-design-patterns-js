import { FC, useEffect, memo } from 'react'
import Task from '../Task/Task'

export type Todo = { id: number, task: string }
interface Props { todoList: Todo[] }

const List: FC<Props> = ({ todoList }) => {

    return (
        <ul>
            {todoList.map((todo: Todo) => (<Task key={todo.id} id={todo.id} task={todo.task} />))}
        </ul>
    )
}
export default memo(List)