import React from "react";
import { useState, useEffect } from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try { 
                const response = await fetch('http://localhost:3000/tasks', {
                    method: 'GET',
                });
                const data = await response.json();
                setTasks(data);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchTasks();
    }, []);

    const handleAddTask = async () => {
        if (newTask.trim() !== ""){
            try {
                const response = await fetch("http://localhost:3000/tasks", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ task: newTask }),
                });
                const data = await response.json();
                setTasks([...tasks, data]);
                setNewTask("");
              } catch (error) {
                console.log(error);
              }
            }
          };

    const handleTaskChange = (event) => {
        setNewTask(event.target.value);
    };
    

    return (
        <>  
            <h1>Todo List</h1>
            <div>
                <input placeholder="Add a task" value={newTask} onChange={handleTaskChange} type="text"></input>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task) => <li key={task.id}>{task.task}</li>)}
            </ul>
        </>
    )
}

export default ToDoList;