import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export default async function middleware(request: NextRequest) {
  const token =
    request.cookies.get("__Secure-next-auth.session-token")?.value ||
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("token")?.value

  const signInURL = new URL("/auth", request.url)
  const dashboardURL = new URL("/admin", request.url)

  if (!token) {
    if (request.nextUrl.pathname == "/auth") {
      return NextResponse.next()
    }
    return NextResponse.redirect(signInURL)
  } else {
    if (request.nextUrl.pathname == "/auth") {
      return NextResponse.redirect(dashboardURL)
    }
  }
}

export const config = {
  matcher: ["/auth", "/admin/:path*"],
}
