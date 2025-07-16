import { users } from "@/app/data/users";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = users.find((item) => item.id == Number(id));
  return Response.json(user);
}
