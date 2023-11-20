import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
	callbacks: {
		authorized: ({ req, token }) => {
			//Si no hay token y no es la pagina de login, redirigir a login
			if (req.nextUrl.pathname !== "login" && !token) {
				console.log(req.nextUrl.pathname, "no token");
				return false;
			}

			//Si hay token y es la pagina de login, redirigir a home
			if (req.nextUrl.pathname === "login" && token) {
				console.log(req.nextUrl.pathname, "token");
				return true;
			}

			return true;
		},
	},
	pages: {
		signIn: "/login",
	},
});

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
