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
			<div className="hidden md:flex w-1/2 h-full lg:w-[70%] bg-gradient-to-r from-purple-500 to-indigo-500">
				{/* You can replace the text below with an actual image */}
				<div className="m-auto text-white flex flex-col items-center justify-center">
					<h1 className="text-4xl font-extrabold mb-4 text-center">
						Bienvenido a <span className="text-indigo-200">One Connect</span>
					</h1>
					<p className="text-xl font-light mb-8 leading-relaxed text-justify">
						Siempre conectado, siempre seguro. <br />
					</p>
				</div>
			</div>

			{/* Right Panel with Login Form */}
			<div className="bg-gray-200 flex-1 h-full md:w-1/2 lg:w-[30%] flex items-center justify-center">
				<div className="m-8 w-full flex flex-col gap-5">
					<h2 className="text-3xl font-extrabold text-center">
						<span className="text-indigo-500">Inicia sesión</span> en tu cuenta
					</h2>
					<LoginForm />
					{/* Support */}
					<div>
						<p className="text-sm text-gray-600 text-start">
							Problemas para iniciar sesión?{" "}
							<Link href="/soporte" className="underline text-indigo-500 hover:text-indigo-600">
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
