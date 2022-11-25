import React from 'react'
import {todoSchema} from '../models/model'
import './styles.css'
import SingleTodo from './SingleTodo'
interface props {
    todoList: todoSchema[];
    setTodoCol: React.Dispatch<React.SetStateAction<todoSchema[]>>
}
const TodoList: React.FC<props>  = ({todoList, setTodoCol}) => {
  return (
    <div className='list'>
    
      
      
      { todoList.map((todo) =>(<div className='list' key={todo.id}><SingleTodo todo={todo} todoList={todoList} setTodoList={setTodoCol} /></div>))}
      
      
    
    </div>
  )
}

export default TodoList
