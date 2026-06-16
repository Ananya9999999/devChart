type TaskCardProps = {
    _id: string;
    title: string;
    description: string;
    priority: string;
    assignedTo?: string;
    dueDate?: string;
};

const TaskCard = ({
    title,
    description,
    priority,
    assignedTo,
    dueDate,
}: TaskCardProps) => {
    const bgClass =
        priority.toLowerCase() === "high"
            ? "bg-red-400"
            : priority.toLowerCase() === "medium"
            ? "bg-yellow-400"
            : "bg-green-400";

    const overdue =
        dueDate &&
        new Date(dueDate) < new Date();

    return (
        <div
            className={`flex h-auto w-64 flex-col rounded-2xl border-2 border-black overflow-hidden ${bgClass}`}
        >
            <div className="bg-black p-3 text-xl font-bold text-teal-200">
                {title}
            </div>

            <div className="p-3">
                <div className="rounded-xl border border-black bg-teal-200 p-3 text-sm">
                    {description}
                </div>

                <div className="mt-2 text-sm">
                    <p>
                        <strong>Assigned:</strong>{" "}
                        {assignedTo || "Unassigned"}
                    </p>

                    {dueDate && (
                        <p>
                            <strong>Due:</strong>{" "}
                            {new Date(
                                dueDate
                            ).toLocaleDateString()}
                        </p>
                    )}

                    {overdue && (
                        <p className="font-bold text-red-700">
                            Overdue
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;