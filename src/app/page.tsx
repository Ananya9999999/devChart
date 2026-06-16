"use client";

import { useEffect, useState } from "react";
import TaskCard from "@/components/TaskCard";

type Task = {
    _id: string;
    title: string;
    description: string;
    priority: string;
    status: string;
    assignedTo: string;
    dueDate: string;
};

export default function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await fetch("/api/tasks");
        const data = await res.json();
        setTasks(data);
    };

    const updateStatus = async (
        id: string,
        status: string
    ) => {
        await fetch("/api/tasks", {
            method: "PATCH",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify({
                id,
                status,
            }),
        });

        fetchTasks();
    };

    const todo = tasks.filter(
        (t) => t.status === "todo"
    );

    const inprogress = tasks.filter(
        (t) => t.status === "inprogress"
    );

    const done = tasks.filter(
        (t) => t.status === "done"
    );

    return (
        <div className="p-8">

            {/* Analytics */}

            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-teal-200 rounded-xl">
                    Total: {tasks.length}
                </div>

                <div className="p-4 bg-yellow-200 rounded-xl">
                    In Progress:
                    {inprogress.length}
                </div>

                <div className="p-4 bg-green-200 rounded-xl">
                    Completed:
                    {done.length}
                </div>
            </div>

            {/* Kanban */}

            <div className="grid grid-cols-3 gap-8">

                {/* Todo */}

                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        To Do
                    </h2>

                    {todo.map((task) => (
                        <div
                            key={task._id}
                            className="mb-3"
                        >
                            <TaskCard
                                {...task}
                            />

                            <button
                                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                                onClick={() =>
                                    updateStatus(
                                        task._id,
                                        "inprogress"
                                    )
                                }
                            >
                                Move →
                            </button>
                        </div>
                    ))}
                </div>

                {/* In Progress */}

                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        In Progress
                    </h2>

                    {inprogress.map((task) => (
                        <div
                            key={task._id}
                            className="mb-3"
                        >
                            <TaskCard
                                {...task}
                            />

                            <button
                                className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
                                onClick={() =>
                                    updateStatus(
                                        task._id,
                                        "done"
                                    )
                                }
                            >
                                Complete
                            </button>
                        </div>
                    ))}
                </div>

                {/* Done */}

                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Done
                    </h2>

                    {done.map((task) => (
                        <div
                            key={task._id}
                            className="mb-3"
                        >
                            <TaskCard
                                {...task}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}