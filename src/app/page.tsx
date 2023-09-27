"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";
import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import wedding from "public/wedding.jpg";
import wedding1 from "public/wedding1.jpg";
import wedding2 from "public/wedding2.jpg";
import wedding3 from "public/wedding3.jpg";
import wedding4 from "public/wedding4.jpg";
import wedding5 from "public/wedding5.jpg";
import { useRef } from "react";

const tabs = [
	{ key: "all", display: "All" },
	{ key: "wedding", display: "Wedding" },
	{ key: "personal", display: "Personal" },
];
const images = [wedding, wedding1, wedding2, wedding3, wedding4, wedding5];
export default function Home() {

	const lightboxRef = useRef < LightGallery | null > (null);
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
									{images.map((image,index) => (
										<Image
											key={image.src}
											src={image}
											alt="wed1"
											className="my-4 hover:opacity-70 cursor-pointer"
											placeholder="blur"
											onClick={() => {
												lightboxRef.current?.openGallery(index);
											}}
										/>
									))}
								</Masonry>

								<LightGalleryComponent
									onInit={(ref) => {
										if (ref) {
											lightboxRef.current = ref.instance
										}
									}}
									speed={500}
									plugins={[lgThumbnail, lgZoom]}
									dynamic
									dynamicEl={images.map((image) => ({
										src: image.src,
										thumb:image.src

									}))}
								/>
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
