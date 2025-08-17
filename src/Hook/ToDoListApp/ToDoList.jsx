import React, { useState } from 'react';
import './ToDolist.css';
import { FaPlus, FaTrash, FaArrowUp, FaArrowDown, FaCheck} from 'react-icons/fa';

function ToDoList() {
    const [tasks, setTasks] = useState(["Do Exercise", "Take Shower", "Touch Typing", "Eat Breakfast"]);
    const [newTask, setNewTask] = useState("");
    
    const handleInputChange = (event) => setNewTask(event.target.value);
    
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };
    
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };
    
    const moveUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };
    
    const moveDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };
    
    const completeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = `✓ ${tasks[index]}`;
        setTasks(updatedTasks);
    };

    return (
        <div className='to-do-container'>
        
            <header className='to-do-title'><h1>TO DO LIST</h1></header>
            
            <div className="input-container">
                <input
                    type="text"
                    className="task-input"
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button className='add-btn' onClick={addTask}>
                    <FaPlus /> Add
                </button>
            </div>
            
            {tasks.length === 0 ? (
                <div className="empty-state">No tasks yet. Add some tasks to get started!</div>
            ) : (
                <ul className="tasks-list">
                    {tasks.map((task, index) => (
                        <li className="task-item" key={index}>
                            <span className="task-text">{task}</span>
                            <div className="task-actions">
                                <button 
                                    className="todo-btn up-btn" 
                                    onClick={() => moveUp(index)}
                                    disabled={index === 0}
                                >
                                    <FaArrowUp />
                                </button>
                                <button 
                                    className="todo-btn down-btn" 
                                    onClick={() => moveDown(index)}
                                    disabled={index === tasks.length - 1}
                                >
                                    <FaArrowDown />
                                </button>
                                <button 
                                    className="todo-btn" 
                                    style={{backgroundColor: '#8b5cf6'}}
                                    onClick={() => completeTask(index)}
                                >
                                    <FaCheck />
                                </button>
                                <button 
                                    className="todo-btn delete-btn" 
                                    onClick={() => deleteTask(index)}
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ToDoList;