type TaskCardProps = {
    _id: string;
    title: string;
    description: string;
    priority: string;
    status: string;
    assignedTo?: string;
    dueDate?: string;
    onMove?: (_id: string, status: string) => void;
    onDelete?: (_id: string) => void;
};

const TaskCard = ({
    _id,
    title,
    description,
    priority,
    status,
    assignedTo,
    dueDate,
    onMove,
    onDelete
}: TaskCardProps) => {
    const overdue =
        dueDate &&
        new Date(dueDate) < new Date() &&
        status !== "done";

    return (
        <div className="bg-white rounded-2xl shadow-lg border p-4 mb-4">

            <h3 className="font-bold text-lg">
                {title}
            </h3>

            <p className="text-gray-600 mt-2">
                {description}
            </p>

            <div className="flex justify-between items-center mt-4">

                <span
                    className={`px-3 py-1 rounded-full text-sm ${
                        priority === "high"
                            ? "bg-red-100 text-red-700"
                            : priority === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                    }`}
                >
                    {priority}
                </span>

                {assignedTo && (
                    <span className="text-gray-500 text-sm">
                        {assignedTo}
                    </span>
                )}
            </div>

            {dueDate && (
                <p
                    className={`mt-2 text-sm ${
                        overdue
                            ? "text-red-600 font-bold"
                            : "text-gray-500"
                    }`}
                >
                    {dueDate}
                </p>
            )}

            <div className="mt-4 flex gap-2">

                {status === "todo" && (
                    <button
                        onClick={() =>
                            onMove?.(_id, "inprogress")
                        }
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                        Start
                    </button>
                )}

                {status === "inprogress" && (
                    <button
                        onClick={() =>
                            onMove?.(_id, "done")
                        }
                        className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                        Complete
                    </button>
                )}

                <button
                    onClick={() => {
                        if (confirm("Delete this task?")) {
                            onDelete?.(_id);
                        }
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>

            </div>

        </div>
    );
};

export default TaskCard;