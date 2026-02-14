import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const session = request.cookies.get("admin_session")?.value
    const token = process.env.ADMIN_TOKEN

    if (!session || !token || session !== token) {
      const loginUrl = request.nextUrl.clone()
      loginUrl.pathname = "/admin/login"
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
