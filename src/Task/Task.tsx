import { FC, useEffect, memo } from 'react'

interface Props { id: number, task: string }

const Task: FC<Props> = ({ task }) => {


    return (<li>{task}</li>)

}
export default memo(Task)