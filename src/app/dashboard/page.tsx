"use client";

import Navbar from "@/components/Navbar"
import TaskCard from "@/components/TaskCard";
import React,{ useState, useEffect } from "react";

type Task = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  assignedTo?: string;
  dueDate?: string;
  project?: string;
};

export default function Home(){

    const [tasks,setTasks] = useState<Task[]>([]);

    async function fetchTasks() {

      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    }

    useEffect(() => {
      fetchTasks();
    }, []);

async function moveTask(
    id: string,
    status: string
) {
    try {
        await fetch("/api/tasks", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                status,
            }),
        });

        fetchTasks(); 
    } catch (error) {
        console.error(
            "Failed to move task:",
            error
        );
    }
}

async function deleteTask(id: string) {
    try {
        await fetch("/api/tasks", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });

        fetchTasks();
    } catch (error) {
        console.error(error);
    }
}

const todoTasks = tasks.filter(
    (task) => task.status === "todo"
);

const inProgressTasks = tasks.filter(
    (task) => task.status === "inprogress"
);

const doneTasks = tasks.filter(
    (task) => task.status === "done"
);
    return (
      <>
        <Navbar />
        <div className="grid grid-cols-3 gap-8 m-4">
          {/* TO DO */}
          <div className="bg-white rounded-2xl shadow-lg p-4 min-h-[600px]">
              <h2 className="text-2xl font-bold mb-4">
                  To Do
              </h2>

              {todoTasks.map((task) => (
                  <TaskCard
                      key={task._id}
                      _id={task._id}
                      title={task.title}
                      description={task.description}
                      priority={task.priority}
                      status={task.status}
                      assignedTo={task.assignedTo}
                      dueDate={task.dueDate}
                      onMove={moveTask}
                      onDelete={deleteTask}
                  />
              ))}
          </div>

          {/* IN PROGRESS */}

          <div className="bg-white rounded-2xl shadow-lg p-4 min-h-[600px]">
              <h2 className="text-2xl font-bold mb-4">
                  In Progress
              </h2>

              {inProgressTasks.map((task) => (
                  <TaskCard
                      key={task._id}
                      _id={task._id}
                      title={task.title}
                      description={task.description}
                      priority={task.priority}
                      status={task.status}
                      assignedTo={task.assignedTo}
                      dueDate={task.dueDate}
                      onMove={moveTask}
                      onDelete={deleteTask}
                  />
              ))}
          </div>

          {/* DONE */}

          <div className="bg-white rounded-2xl shadow-lg p-4 min-h-[600px]">
              <h2 className="text-2xl font-bold mb-4">
                  Done
              </h2>

              {doneTasks.map((task) => (
                  <TaskCard
                      key={task._id}
                      _id={task._id}
                      title={task.title}
                      description={task.description}
                      priority={task.priority}
                      status={task.status}
                      assignedTo={task.assignedTo}
                      dueDate={task.dueDate}
                      onMove={moveTask}
                      onDelete={deleteTask}
                  />
              ))}
          </div>

      </div>
      </>
    );
}