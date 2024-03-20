"use client";

import Image from "next/image";
import spinner from "@/public/icons/spinner.png";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getAllData } from "@/utils/requests";
import { easeInOut, motion } from "framer-motion";

let page = 2;

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const LoadMore = ({ type }) => {
	const { ref, inView } = useInView();
	const [data, setData] = useState([]);

	useEffect(() => {
		if (inView) {
			getAllData(type, page).then((res) => {
				setData([...data, ...res.results]);
				page++;
			});
		}
	}, [inView, data, type]);

	return (
		<>
			{data.map((item, index) => {
				return (
					<motion.div
						key={item.id}
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: index * 0.25, ease: easeInOut, duration: 0.5 }}
						viewport={{ amount: 0 }}>
						<Image
							src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
							alt={item.title}
							width={200}
							height={100}
						/>
						<p className="text-md line-clamp-1 w-1/2">
							{item.title}
							{item.name}
						</p>
					</motion.div>
				);
			})}
			<div ref={ref}>
				<Image
					src={spinner}
					width={100}
					height={100}
					alt="Loading..."
					className="animate-spin"
				/>
			</div>
		</>
	);
};

export default LoadMore;
