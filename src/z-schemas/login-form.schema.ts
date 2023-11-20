import { z } from "zod";

export const SignInFormSchema = z.object({
	email: z.string().email({ message: "Porfavor ingrese un correo valido" }),
	password: z.string().min(1, { message: "Ingrese al menos 1 caracter" }),
});

export type SignInFormSchemaType = z.infer<typeof SignInFormSchema>;
