import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("first i got executed");

  const isPublicPath = path === "/login" || path === "/signup" || path === "/"; //sets true if path is /login or /signup

  const token = request.cookies.get("token")?.value || ""; //checks token of request

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl)); //redirects to home for this condition
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl)); //reirects to login if no token and not public
  }
}

//this part of the code matches the url links
export const config = {
  matcher: ["/", "/profile", "/login", "/signup"],
};
