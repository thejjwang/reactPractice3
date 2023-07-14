import React from "react";
import { useState } from "react";

// Build a todo list component. It should have an input field for adding new tasks,
// a button to add the task to a list, and a display area to show the list of tasks. 
// Use useState to manage the list of tasks.

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputTasks, setInputTasks] = useState('');

    const handleAddTask = () => {
        if (inputTasks != ""){
            setTasks([...tasks, inputTasks]);
        }
    }
    const handleTaskChange = (event) => {
        setInputTasks(event.target.value);
    };

    return (
        <>
            <input placeholder="enter a task" value={inputTasks} onChange={handleTaskChange} type="text"></input>
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
        </>
    )
}

export default ToDoList;