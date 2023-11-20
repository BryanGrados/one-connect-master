"use client";

import { useSignInForm } from "@/src/hooks";
import { useSignIn } from "@/src/hooks/use-sign-in";
import { SignInFormSchemaType } from "@/src/z-schemas/login-form.schema";
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeSlash, FastForward } from "@phosphor-icons/react/dist/ssr";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
	const [isPending, setIsPending] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const router = useRouter();
	const urlParams = useSearchParams();
	const { handleSignIn } = useSignIn();
	const { register, handleSubmit, errors } = useSignInForm();

	const handleSignInFormSubmit: SubmitHandler<SignInFormSchemaType> = async (data) => {
		setIsPending(true);
		toast.promise(handleSignIn(data), {
			loading: "Conectando...",
			success: () => {
				setIsPending(false);
				const callbackUrl = urlParams.get("callbackUrl");
				console.log(callbackUrl);

				//redirect to the callback url if it exists, otherwise redirect to the home page
				router.push(callbackUrl || "/");
				return "Conectado";
			},
			error: "Correo o contraseña incorrectos",
			finally() {
				setIsPending(false);
			},
		});
	};

	return (
		<form className="flex flex-col gap-3" onSubmit={handleSubmit(handleSignInFormSubmit)}>
			{/* Input fields */}
			<Input
				labelPlacement="outside"
				label="Correo"
				radius="sm"
				type="email"
				classNames={{
					input: "text-base",
				}}
				{...register("email")}
				color={errors.email ? "danger" : "default"}
				errorMessage={errors.email?.message}
			/>
			<Input
				labelPlacement="outside"
				label="Contraseña"
				radius="sm"
				type={isVisible ? "text" : "password"}
				classNames={{
					input: "text-base",
				}}
				endContent={
					<button type="button" onClick={() => setIsVisible((prev) => !prev)}>
						{isVisible ? <Eye size={20} /> : <EyeSlash size={20} />}
					</button>
				}
				{...register("password")}
				color={errors.password ? "danger" : "default"}
				errorMessage={errors.password?.message}
			/>

			{/* Submit button */}
			<Button
				variant="shadow"
				color="secondary"
				disableRipple
				radius="sm"
				className="mt-4 group"
				fullWidth
				type="submit"
				isLoading={isPending}
				endContent={
					<FastForward
						size={20}
						weight="duotone"
						className="group-hover:transform group-hover:translate-x-1 transition-transform"
					/>
				}
			>
				Conectarse
			</Button>
		</form>
	);
};

export default LoginForm;
