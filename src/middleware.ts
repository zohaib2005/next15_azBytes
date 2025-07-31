import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const userSetting = request.cookies.get("test");
  if (userSetting) {
    console.log(userSetting);
  } else {
    response.cookies.set("abcd", "123434234");
  }

  return response;

  // if (request.nextUrl.pathname == "/about") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
}
