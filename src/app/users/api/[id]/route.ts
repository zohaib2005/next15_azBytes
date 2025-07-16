import { users } from "@/app/data/users";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = users.find((item) => item.id == Number(id));
  return Response.json(user);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userRequest = await request.json();
  const userIndex = users.findIndex((item) => item.id == Number(id));
  users[userIndex]["name"] = userRequest.name;
  return Response.json(users[userIndex]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userIndex = users.findIndex((item) => item.id == Number(id));
  if (userIndex > 0) {
    users.splice(userIndex, 1);
  }
  return Response.json({ message: "User Deleted" });
}
