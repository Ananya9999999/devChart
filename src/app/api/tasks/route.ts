import connectDB from "@/lib/mongodb";
import Task from "@/models/Tasks";

export async function GET(){
    try{
        await connectDB();

        const tasks = await Task.find();

        return Response.json(tasks);

    }catch(error){

        console.log(error);

        return Response.json(
            {message:"Failed to fetch tasks"},
            {status: 500}
        );
    }
}

export async function POST(request: Request){
    try{
        await connectDB();

        const body = await request.json();

        const task = await Task.create(body);

        return Response.json(task,{status: 201});
    }catch(error){
        console.log(error);
        return Response.json(
            {message:"Failed to create task"},
            {status: 500}
        );
    }
}

export async function PATCH(request: Request){
    try{
        await connectDB();

        const {id, status}= await request.json();

        const updatedTask= await Task.findByIdAndUpdate(id, {status}, {new: true});

        return Response.json(updatedTask);
    } catch(error){

        console.log(error);

        return Response.json(
            {message:"Failed to update task"},
            {status: 500}
        );
    }
}

export async function DELETE(request: Request) {
    try {
        await connectDB();

        const { id } = await request.json();

        await Task.findByIdAndDelete(id);

        return Response.json({
            message: "Task deleted successfully",
        });
    } catch (error) {
        console.log(error);

        return Response.json(
            { message: "Failed to delete task" },
            { status: 500 }
        );
    }
}