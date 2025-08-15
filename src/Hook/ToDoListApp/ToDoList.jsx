import React from 'react'
import { useState } from 'react'
import './ToDolist.css'

function ToDoList() {
    const [tasks,setTask]=useState(["Do Exercise","Take Shower","Touch Typing","Eat Breakfast"]);
    const [newTask,setNewtask]=useState("");
   const handleInputChange=(event)=>setNewtask(event.target.value);
   const addTask=()=>setTask();
   const deletetask=()=>deletetask;
   const moveUp=(index)=>moveUp;
   const moveDown=(index)=>moveDown;
  return (
    <div className='to-do-container'>
        <header className='to-do-title'><h1>TO DO LIST APP</h1></header>
  <div>
    <input
     type="text"
     placeholder='Enter a task ......'
     value={newTask}
     onChange={handleInputChange}
     />
     <button className='add-btn'onClick={addTask}>Add</button>
  </div>
    <ol>
        {tasks.map((task,index)=>
        <li key={index}><span className='texts'>{task}</span>
        <button className='todo-btn bg-amber-600' onClick={deletetask}>Delete</button>
        <button className='todo-btn bg-green-400'onClick={moveUp}>Up</button>
        <button className='todo-btn bg-blue-500'onClick={moveDown}>Down</button>
        </li>
    )}
    </ol>
    </div>
  )
}

export default ToDoList