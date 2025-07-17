import { users } from "@/app/data/users";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userName = searchParams.get("username");
  const filteresUser = userName
    ? users.find((item) => item.username == userName)
    : users;
  return Response.json(filteresUser);
}

export async function POST(request: Request) {
  const user = await request.json();

  const newUser = {
    id: users.length + 1,
    name: user.name,
    username: user.username,
    email: user.email,
  };
  users.push(newUser);
  const resData = {
    message: "User created",
    user: newUser,
  };
  return new Response(JSON.stringify(resData), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
