import './styles.css'
import React, { useRef } from 'react'
import { Props } from '../models/model'




const InputField = ({todo, setTodo,addTodo}:Props) => {

    const inputRef= useRef<HTMLInputElement>(null)
   
    
  return (
    <div>
      <form className="input"onSubmit={(e)=>{
      addTodo(e);
      inputRef.current?.blur();
           }}>
        <input 
        ref= {inputRef}
        type="input" className="input_box"
        placeholder='Your text goes here'
        value= {todo} 
        onChange= {(e)=>{setTodo(e.target.value)}}
        />
        <button className="input_submit" type="submit" >Go</button>
      </form>
        
    </div>
  )
}

export default InputField
