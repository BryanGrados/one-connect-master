import LoginForm from "@/src/components/auth/login-form";
import { getAuthServerSession } from "@/src/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const isAuthenticated = async () => {
	const session = await getAuthServerSession();

	if (session?.user.id) {
		return redirect("/dashboard");
	}
};

const LoginPage = async () => {
	await isAuthenticated();

	return (
		<div className="flex items-center justify-center h-screen">
			{/* Left Panel with Image */}
			<div className="hidden md:flex w-1/2 h-full lg:w-[70%] bg-gradient-to-br from-ele-primary to-ele-quarter">
				{/* You can replace the text below with an actual image */}
				<div className="flex flex-col items-center justify-center m-auto text-white">
					<h1 className="mb-4 text-4xl font-extrabold text-center">
						Bienvenido a <span className="text-ele-primary">One Connect</span>
					</h1>
					<p className="mb-8 text-xl font-light leading-relaxed text-justify">
						Siempre conectado, siempre seguro. <br />
					</p>
				</div>
			</div>

			{/* Right Panel with Login Form */}
			<div className="bg-lay-primary flex-1 h-full md:w-1/2 lg:w-[30%] flex items-center justify-center">
				<div className="flex flex-col w-full gap-5 m-8">
					<h2 className="text-3xl font-extrabold text-center text-white">
						<span className="text-ele-primary">Inicia sesión</span> en tu cuenta
					</h2>
					<LoginForm />
					{/* Support */}
					<div>
						<p className="text-sm text-start text-white">
							Problemas para iniciar sesión?{" "}
							<Link href="/soporte" className="text-ele-primary underline hover:text-ele-tertiary transition-colors">
								Contacta con soporte
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
