import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	function middleware(req) {
		// console.log(req.nextauth.token?.rol);
		// if (req.nextUrl.pathname.startsWith("/login") && req.nextauth.token?.rol) {
		// 	console.log("middleware: login page and user is logged in");
		// 	return NextResponse.redirect(new URL("/", req.url));
		// }
	},
	{
		callbacks: {
			authorized: ({ req, token }) => {
				if (req.nextUrl.pathname !== "login" && !token) {
					return false;
				}

				return true;
			},
		},
		pages: {
			signIn: "/login",
		},
	},
);

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
