"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";
import wedding from "public/wedding.jpg";
import wedding1 from "public/wedding1.jpg";
import wedding2 from "public/wedding2.jpg";
import wedding3 from "public/wedding3.jpg";
import wedding4 from "public/wedding4.jpg";
import wedding5 from "public/wedding4.jpg";

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
					width={75}
					height={50}
					alt="LOGO"
				/>
				<div className="uppercase tex-lg font-medium"></div>
				<Link
					href="#"
					className="rounded-xl bg-amber-200 px-3 py-2 hover:bg-opacity-90"
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
									<Image
										src={wedding}
										alt="wed1"
										className="my-4"
									/>
									<Image
										src={wedding1}
										alt="wed1"
										className="my-4"
									/>
									<Image
										src={wedding2}
										alt="wed1"
										className="my-4"
									/>
									<Image
										src={wedding3}
										alt="wed1"
										className="my-4"
									/>
									<Image
										src={wedding4}
										alt="wed1"
										className="my-4"
									/>
									<Image
										src={wedding5}
										alt="wed1"
										className="my-4"
									/>
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
