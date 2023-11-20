import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormSchema, type SignInFormSchemaType } from "../z-schemas/login-form.schema";
import { useForm } from "react-hook-form";

export const useSignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormSchemaType>({ resolver: zodResolver(SignInFormSchema) });

	return {
		register,
		handleSubmit,
		errors,
	};
};
