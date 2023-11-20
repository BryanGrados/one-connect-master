import { getServerSession, type AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authDB } from "../prisma/prisma-connector";
import { compare } from "bcrypt-ts";

export const authOptions: AuthOptions = {
	providers: [
		Credentials({
			credentials: {
				correo: {},
				clave: {},
				nombreUsuario: {},
				avatar: {},
				rol: {},
				tiendaId: {},
				createAt: {},
				updateAt: {},
			},
			authorize: async (credentials) => {
				if (!credentials) return null;

				const user = await authDB.usuario.findFirst({
					where: {
						correo: credentials.correo,
					},
					include: {
						tienda: true,
					},
				});

				if (!user) return null;

				const isValid = await compare(credentials.clave, user.clave);

				if (!isValid) return null;

				const { clave, ...userWithoutClave } = user;

				return userWithoutClave;
			},
		}),
	],
	callbacks: {
		session: async ({ session, token }) => {
			session.user = { ...session.user, ...token };
			return session;
		},
		jwt: async ({ token, user }) => {
			if (user) {
				token = { ...token, ...user };
			}
			return token;
		},
	},
	session: {
		strategy: "jwt",
	},
	useSecureCookies: process.env.NODE_ENV === "production",
	secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthServerSession = () => getServerSession(authOptions);
