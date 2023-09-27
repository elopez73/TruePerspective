"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";
const tabs = [
	{ key: "all", display: "All" },
	{ key: "wedding", display: "Wedding" },
	{ key: "personal", display: "Personal" },
];
export default function Home() {
	return (
		<div className=" h-full bg-white align-center overflow-auto">
			<header className="fixed w-full top-0 z-10 flex justify-between items-center h-[10%] px-10">
				<Image
					src="/logo.png"
					width={100}
					height={50}
					alt="LOGO"
				/>
				<div className="uppercase tex-lg font-medium"></div>
				<Link
					href="#"
					className="rounded-xl bg-yellow-200 px-3 py-2 hover:bg-opacity-90"
				>
					Contact Me
				</Link>
			</header>

			<main className="pt-[5%]">
				<div className="flex flex-col items-center h-full">
					<Tab.Group>
						<Tab.List className="flex items-center gap-12">
							{tabs.map((tab) => (
								<Tab
									key={tab.key}
									className="p-2"
								>
									{({ selected }) => (
										<span
											className={`uppercase ${
												selected ? "text-slate-900" : "text-black"
											}`}
										>
											{tab.display}
										</span>
									)}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels className=" h-full  max-w-[900px] w-full p-2 sm:p-4 my-6">
							<Tab.Panel>
								<Masonry
									breakpointCols={2}
									className="flex gap-4"
									columnClassName="my-masonry-grid_column"
								>
									<img
										src="/wedding1.jpg"
										alt="wed1"
										className="my-4"
									></img>
									<img
										src="/wedding2.jpg"
										alt="wed1"
										className="my-4"
									></img>
									<img
										src="/wedding3.jpg"
										alt="wed1"
										className="my-4"
									></img>
								</Masonry>
							</Tab.Panel>
							<Tab.Panel>Wedding shoot</Tab.Panel>
							<Tab.Panel>Personal</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</main>

			<footer className="uppercase h-[10%] flex justify-center items-center">
				<p>True Perspective</p>
			</footer>
		</div>
	);
}
