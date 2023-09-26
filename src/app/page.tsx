"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
const tabs = [
	{ key: "all", display: "All" },
	{ key: "wedding", display: "Wedding" },
	{ key: "personal", display: "Personal" },
];
export default function Home() {
	return (
		<div className="flex flex-col h-full bg-white align-center ">
			<header className="flex justify-between items-center h-[15%] px-6">
				<Image
					src="/logo.png"
					width={150}
					height={50}
					alt="LOGO"
				/>
				<Link
					href="#"
					className="rounded-xl bg-slate-400 px-3 py-2 hover:bg-opacity-90"
				>
					Contact Me
				</Link>
			</header>

			<main className="grow">
				<div className="flex flex-col items-center">
					<Tab.Group>
						<Tab.List className="flex items-center gap-4">

							{tabs.map((tab) => (
								<Tab key={tab.key}>
									{({ selected }) => (
										<span className={selected ? "text-white" : "text-black"}>
											{tab.display}
										</span>
									)}
								</Tab>
							))}

						
						</Tab.List>
						<Tab.Panels>
							<Tab.Panel>All Photos</Tab.Panel>
							<Tab.Panel>Wedding</Tab.Panel>
							<Tab.Panel>Personal</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</main>

			<footer className="h-[10%]">
				<p>FOOTER</p>
			</footer>
		</div>
	);
}
