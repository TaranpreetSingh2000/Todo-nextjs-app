import connectDB from "@/lib/database";
import Todo from "@/model/Todo.model";
import { NextResponse } from "next/server";

export async function GET(request,{ params }) {  // take params as second argument
  const { id } =  params;
  await connectDB();
  const todo = await Todo.findById(id);
  return NextResponse.json({
    success: true,
    message: "Todo fetched successfully",
    todo,
  });
}
