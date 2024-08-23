import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/menu"];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  // const isProtectedRoute = protectedRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  const isPublicRoute = publicRoutes.includes(path);
  const token = cookies().get("accessToken")?.value;

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (
    isPublicRoute &&
    token && 
    !protectedRoutes.includes(req.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/menu", req.nextUrl));
  }

  return NextResponse.next();
}
