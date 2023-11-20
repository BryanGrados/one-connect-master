"use client";

// import { signUp } from "@/src/hooks/sign-up";

const RegisterForm = () => {
	const handleSingUp = async () => {
		// const user = await signUp({
		// 	correo: "bryangrados9@gmail.com",
		// 	clave: "Bryan123GRK",
		// 	nombreUsuario: "bryangrados",
		// 	rol: "ADMIN",
		// 	tiendaId: "8ffda503-f206-4d60-b6a0-d6366a4b77b1",
		// });
		// console.log(user);
	};

	return (
		<div>
			<button
				type="button"
				onClick={handleSingUp}
				className="rounded-md bg-white text-black font-semibold px-2 py-1.5"
			>
				Sign Up
			</button>
		</div>
	);
};

export default RegisterForm;
