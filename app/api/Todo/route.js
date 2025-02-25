import connectDB from "@/lib/database";
import Todo from "@/model/Todo.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectDB();
  const todo = await Todo.create({
    title,
    description,
  });
  return NextResponse.json({    
    message: "Todo created successfully",
    todo: todo,
  });
}

export async function GET() {
  await connectDB();
  const todos = await Todo.find();
  console.log(todos);
  return NextResponse.json({
    success: true,
    message: "Todos fetched successfully",
    todos,
  });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({
    success: true,
    message: "Todo deleted successfully",
  });
}

export async function PUT(request) {
  const { id, title, description } = await request.json();
  await connectDB();
  const updatedTodo = await Todo.findByIdAndUpdate(id, {
    title,
    description,
  });
  return NextResponse.json({
    message: "Todo updated successfully",
    todo: updatedTodo,
  });
}
