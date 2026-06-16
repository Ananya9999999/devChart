"use client";

import Navbar from '@/components/Navbar'
import React, { useState } from "react";

const CreateTask = () => {

const [project, setProject] = useState("");
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [priority,setPriority] = useState("low");
const [assignedTo, setAssignedTo] = useState("");
const [dueDate, setDueDate] = useState("");

async function handleSubmit(event: React.FormEvent){
    event.preventDefault();

    try{
        const response = await fetch("/api/tasks",{
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ project, title, description, priority, assignedTo, dueDate }),
        });

        const data = await response.json();
        console.log(data);

        setProject("");
        setTitle("");
        setDescription("");
        setPriority("low");
        setAssignedTo("");
        setDueDate("");

        alert("Task created successfully!");
    } catch (error) {
        console.error("Error creating task:", error);
        alert("Failed to create task.");
    }
}

    return (
        <div>
            <Navbar />
            <h1 className="text-6xl font-bold m-3 p-3 text-teal-200 text-outline-black">Create a New Club Task</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-4 p-3">

                <h3 className="text-2xl">Project Name</h3>
                <input
                    type="text"
                    placeholder="Hackaton 2026"
                    value={project}
                    onChange={(event) => setProject(event.target.value)}
                    className="w-full p-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white appearance-none"
                />

                <h3 className="text-2xl">Task Name</h3>
                <input
                    type="text"
                    placeholder="Design Event Poster"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="w-full p-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white appearance-none"
                />

                <h3 className="text-2xl">Description</h3>
                <textarea  
                    placeholder="Describe the task..." 
                    value={description} 
                    onChange={(event)=>{setDescription(event.target.value)}} 
                    className="w-full p-3 bg-white  rounded-xl  focus:outline-none focus:ring-2 focus:ring-white appearance-none"
            
                />

                <h3 className="text-2xl">Priority</h3>
                <select
                    value={priority}
                    onChange={(event)=>{setPriority(event.target.value)}}
                    className="w-full p-3 bg-white  rounded-xl  focus:outline-none focus:ring-2 focus:ring-white appearance-none"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <h3 className="text-2xl">Assign to Club Member</h3>
                <select
                    value={assignedTo}
                    onChange={(event)=>{setAssignedTo(event.target.value)}}
                    className="w-full p-3 bg-white  rounded-xl  focus:outline-none focus:ring-2 focus:ring-white appearance-none"
                >
                    <option value="">Select Member</option>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                    <option value="Charlie">Charlie</option>
                </select>

                <h3 className="text-2xl">Due Date</h3>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(event)=>{setDueDate(event.target.value)}}
                    className="w-full p-3 bg-white  rounded-xl  focus:outline-none focus:ring-2 focus:ring-white appearance-none"
                />

                <button type="submit"  className="w-full p-3 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-white appearance-none" >Create Task</button>

            </form>
        </div>
    )
}

export default CreateTask