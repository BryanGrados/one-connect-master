"use client";

import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
} from "@nextui-org/react";
import { CaretDown, GearSix, PaintBrush, SignOut, User } from "@phosphor-icons/react/dist/ssr";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const dropdownStyleBase =
	"data-[hover=true]:bg-gradient-to-r data-[hover=true]:from-ele-tertiary data-[hover=true]:to-ele-quarter data-[hover=true]:text-white";

const AccountAvatar = ({ user }: { user: Session["user"] }) => {
	const handleSignOut = () => {
		toast.promise(signOut(), {
			loading: "Cerrando sesión...",
			success: "Sesión cerrada",
			error: "No se pudo cerrar sesión",
		});
	};

	return (
		<Dropdown
			placement="bottom-end"
			classNames={{
				content: "bg-lay-primary text-default-300",
			}}
		>
			<DropdownTrigger>
				<div className="flex items-center justify-center gap-5 cursor-pointer">
					<Avatar
						radius="sm"
						as="button"
						// src={user.avatar}
						// @for testing purposes
						src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
						alt={user.nombreUsuario}
						name={user.nombreUsuario}
					/>
					<p className="items-center justify-center hidden font-sans text-sm md:flex">
						{user.nombreUsuario}
						<CaretDown size={12} weight="fill" className="ml-2" />
					</p>
				</div>
			</DropdownTrigger>

			<DropdownMenu aria-label="Profile Actions" disabledKeys={["profile"]}>
				<DropdownItem isReadOnly key="profile" className="mb-5 opacity-100">
					<p className="text-white text-sm">Bienvenido</p>
					<p className="text-white text-tiny">{user.correo}</p>
				</DropdownItem>

				<DropdownSection
					title="Cuenta"
					showDivider
					classNames={{
						divider: "bg-gradient-to-r from-ele-primary to-ele-quarter",
						heading: "text-other-meadow",
					}}
				>
					<DropdownItem
						startContent={<User size={20} />}
						description="Ver datos personales"
						classNames={{ base: dropdownStyleBase }}
					>
						Perfil
					</DropdownItem>
					<DropdownItem
						startContent={<GearSix size={20} />}
						description="Configuración general"
						classNames={{ base: dropdownStyleBase }}
					>
						Configuración
					</DropdownItem>
				</DropdownSection>

				<DropdownSection
					title="Preferencias"
					showDivider
					classNames={{
						divider: "bg-gradient-to-r from-ele-primary to-ele-quarter",
						heading: "text-other-meadow",
					}}
				>
					<DropdownItem
						startContent={<PaintBrush size={20} />}
						description="Cambiar el tema de la aplicación"
						classNames={{ base: dropdownStyleBase }}
					>
						Temas
					</DropdownItem>
				</DropdownSection>

				<DropdownSection title="Sesión">
					<DropdownItem
						startContent={<SignOut size={20} />}
						color="danger"
						description="Cerrar sesión"
						classNames={{ base: dropdownStyleBase }}
						onPress={handleSignOut}
					>
						Salir
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	);
};

export default AccountAvatar;
