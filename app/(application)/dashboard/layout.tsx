import AccountAvatar from "@/src/components/dashboard/account-avatar";
import { getAuthServerSession } from "@/src/lib/auth";
import { Button } from "@nextui-org/react";
import { List } from "@phosphor-icons/react/dist/ssr";

const DashboradLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getAuthServerSession();

	if (!session) return null;

	return (
		<main>
			<div className="h-16 border-b shadow-small sticky  flex items-center justify-center">
				<div className="container h-full flex items-center justify-between">
					<Button
						isIconOnly
						variant="light"
						radius="sm"
						className="data-[hover=true]:bg-ele-primary"
					>
						<List size={24} color="#fff" />
					</Button>
					<h1 className="text-2xl font-bold">One Connect</h1>
					<AccountAvatar user={session.user} />
				</div>
			</div>
			{children}
		</main>
	);
};

export default DashboradLayout;
