import React, { useState } from 'react'
import { todoSchema } from '../models/model'
import { AiFillEdit, AiFillDelete, AiFillCheckCircle } from 'react-icons/ai'
import './styles.css' 

type props={
    todo: todoSchema;
    todoList: todoSchema[];
    setTodoList: React.Dispatch<React.SetStateAction<todoSchema[]>>
}

const SingleTodo: React.FC<props> = ({todo, todoList, setTodoList}) => {
    const [edit, setEdit]= useState<boolean>(false) 
    const [newTodo, setNewTodo]= useState<string>(todo.todo)
const todoStatus =(id:number)=>{
    setTodoList(
        todoList.map((currTodo)=>(currTodo.id===id? {...currTodo, isDone: !currTodo.isDone}: currTodo)
        
    ))
    }
const todoDelete =(id:number)=>{
    setTodoList(
        todoList.filter((currTodo)=>(currTodo.id!==id)
     ))
    }
const todoEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault();
    setTodoList(
    todoList.map((t) => (t.id===id ? {...t, todo: newTodo }: t)))
    setEdit(false)

}
    

  return (
    <>
        <form action="" className="todoCard" onSubmit={(e)=>{todoEdit(e, todo.id)}}>
          { edit? (<input
           defaultValue={todo.todo}
           onChange={(e)=>{
                e.preventDefault()
                setNewTodo(e.target.value)
           }}
           className='editTodo'
           />
            ):(
                todo.isDone? <s className="cardText">{todo.todo}</s> : <span className="cardText">{todo.todo}</span> 
            )
}
            {/* <span className="cardText">{todo.todo}</span>   */}
        

           
        <div>
            <span className="icon" onClick={()=>{(!edit && !todo.isDone) && (setEdit(!edit))}} ><AiFillEdit /></span>
            <span className="icon" onClick={()=>{todoStatus(todo.id)}}><AiFillCheckCircle /></span>
            <span className="icon" onClick={()=>{todoDelete(todo.id)}}><AiFillDelete /></span>
        </div>
        </form>  
 </>
  )
}

export default SingleTodo
