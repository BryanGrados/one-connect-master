import { authDB, guiasWebDB } from "@/src/prisma/prisma-connector";

const testDB = async () => {
	const guias = await guiasWebDB.oSSMA_GUIAS.findMany();

	console.dir(guias, { depth: null });

	return guias;
};

export default async function Home() {
	const users = await testDB();

	return <main>Hola Prisma</main>;
}
