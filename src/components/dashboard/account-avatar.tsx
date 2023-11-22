"use client";

import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Session } from "next-auth";

const AccountAvatar = ({ user }: { user: Session["user"] }) => {
	return (
		<Dropdown placement="bottom-end">
			<DropdownTrigger>
				<div>
					<Avatar
						radius="sm"
						as="button"
						className="transition-transform"
						src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
					/>
					<p>{user.nombreUsuario}</p>
				</div>
			</DropdownTrigger>
			<DropdownMenu aria-label="Profile Actions" variant="flat">
				<DropdownItem key="profile" className="h-14 gap-2" textValue="Profile">
					<p className="font-semibold">Signed in as</p>
					<p className="font-semibold">zoey@example.com</p>
				</DropdownItem>
				<DropdownItem key="settings">My Settings</DropdownItem>
				<DropdownItem key="team_settings">Team Settings</DropdownItem>
				<DropdownItem key="analytics">Analytics</DropdownItem>
				<DropdownItem key="system">System</DropdownItem>
				<DropdownItem key="configurations">Configurations</DropdownItem>
				<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
				<DropdownItem key="logout" color="danger">
					Log Out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default AccountAvatar;
