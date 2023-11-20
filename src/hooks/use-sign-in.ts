import { signIn } from "next-auth/react";
import { SignInFormSchemaType } from "../z-schemas/login-form.schema";

export const useSignIn = () => {
	const handleSignIn = async (formData: SignInFormSchemaType) => {
		const response = await signIn("credentials", {
			redirect: false,
			correo: formData.email,
			clave: formData.password,
		});

		if (response?.error) {
			throw new Error(response.error);
		}

		return response;
	};

	return { handleSignIn };
};
