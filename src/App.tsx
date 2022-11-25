import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {todoSchema} from './models/model'

const App: React.FC = ()=>{


  const [todo, setTodo]= useState<string>('');
  // Todo Collection
  const [todoCol, setTodoCol]= useState<todoSchema[]>([]);

  
  const addTodo= (e:React.FormEvent)=> {
      e.preventDefault();
      if (todo){
        setTodoCol([...todoCol, 
          { id: Date.now(), 
            todo: todo,
            isDone: false,
          }])
         setTodo('') 
      }
      else {
        alert('Enter Task')
      }
      
    }
    console.log(todoCol);

  return (
    <>
    <div className="App">
      <span className="heading"><p>Ask Task</p></span>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/>

      <TodoList todoList = {todoCol} setTodoCol={setTodoCol}/>
      
    </div>
    </>
  );
}

export default App;
