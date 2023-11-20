import LoginForm from "@/src/components/auth/login-form";
import RegisterForm from "@/src/components/auth/register-form";
import { getAuthServerSession } from "@/src/lib/auth";

export default async function Home() {
	const session = await getAuthServerSession();

	return (
		<main>
			<RegisterForm />
			<LoginForm />
			{JSON.stringify(session)}
		</main>
	);
}
