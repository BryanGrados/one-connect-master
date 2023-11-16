import { PrismaClient as PrismaAuthDB } from "@prisma-auth";
import { PrismaClient as PrismaGuiasWebDB } from "@prisma-guias-web";

type PrismaClients = {
	authDB: PrismaAuthDB;
	guiasWebDB: PrismaGuiasWebDB;
};

const prismaClientsSingleton = (): PrismaClients => {
	return {
		authDB: new PrismaAuthDB(),
		guiasWebDB: new PrismaGuiasWebDB(),
	};
};

const globalForPrisma = globalThis as unknown as {
	prismaClients: PrismaClients | undefined;
};

const prismaClients = globalForPrisma.prismaClients ?? prismaClientsSingleton();

export const authDB = prismaClients.authDB;
export const guiasWebDB = prismaClients.guiasWebDB;

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaClients = prismaClients;
