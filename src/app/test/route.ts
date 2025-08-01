import { headers, cookies } from "next/headers";

export async function GET() {
  const reqHeaders = await headers();
  console.log(reqHeaders.get("abc"));

  // const userCookie = request.cookies.get("test");
  const userCookie = await cookies();
  console.log(userCookie.get("test"));

  return new Response("<h2>Hello Next.js Route Handlers</h2>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "test=12345",
    },
  });
}
