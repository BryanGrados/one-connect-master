import { Rol } from "@prisma/client";
import { DefaultSession } from "next-auth";

interface User {
	id: string;
	correo: string;
	clave: string;
	nombreUsuario: string;
	avatar?: string;
	rol: Rol;
	tienda: Tienda;
	createdAt: string;
	updatedAt: string;
}

interface Tienda {
	id: string;
	nombre: string;
	almacen: string;
	createdAt: string;
	updatedAt: string;
}

// Extend NextAuth Session
declare module "next-auth" {
	interface Session extends DefaultSession {
		user: User & DefaultSession["user"];
	}
}

// Extend NextAuth JWT
declare module "next-auth/jwt" {
	// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
	interface JWT extends User {}
}
