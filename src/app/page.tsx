import Navbar from "@/components/Navbar";
import Link from "next/link";
import connectDB from "@/lib/mongodb";
import Task from "@/models/Tasks";

export default async function Home() {
    await connectDB();

    const tasks = await Task.find();

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task: any) => task.status === "done"
    ).length;

    const inProgressTasks = tasks.filter(
        (task: any) => task.status === "inprogress"
    ).length;

    return (
        <div>
            <Navbar />

            <div className="flex flex-col items-center text-center px-6 py-12">

            <h1 className="text-7xl font-bold text-teal-500">
                ClubSync
            </h1>

            <p className="text-2xl mt-6 max-w-3xl">
                Collaborate. Organize. Deliver.
            </p>

            <p className="text-gray-600 mt-2">
                A project management platform built for student clubs.
            </p>

            <div className="flex gap-6 mt-10">
                <Link href="/create-task">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold shadow-lg">
                    + New Task
                </button>
                </Link>

                <Link href="/dashboard">
                <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold shadow-lg">
                    View Board
                </button>
                </Link>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-5xl">

                <div className="bg-white rounded-2xl shadow-lg border p-6">
                <h2 className="text-4xl font-bold text-teal-600">
                    {totalTasks}
                </h2>
                <p className="text-gray-500">
                    Total Tasks
                </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border p-6">
                <h2 className="text-4xl font-bold text-yellow-500">
                    {inProgressTasks}
                </h2>
                <p className="text-gray-500">
                    In Progress
                </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border p-6">
                <h2 className="text-4xl font-bold text-green-500">
                    {completedTasks}
                </h2>
                <p className="text-gray-500">
                    Completed
                </p>
                </div>

            </div>

            {/* Features */}

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-6xl w-full">

                <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-bold text-xl mb-2">
                    Kanban Workflow
                </h3>
                <p>
                    Track tasks through To Do, In Progress and Done.
                </p>
                </div>

                <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-bold text-xl mb-2">
                    Team Assignment
                </h3>
                <p>
                    Assign responsibilities to club members.
                </p>
                </div>

                <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-bold text-xl mb-2">
                    Deadline Tracking
                </h3>
                <p>
                    Monitor due dates and task deadlines.
                </p>
                </div>

            </div>
            </div>
        </div>
    );
}