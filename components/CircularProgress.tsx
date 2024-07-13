import React from "react";

const CircularProgress = ({
	percentage,
	userRating,
}: {
	percentage: number;
	userRating: number;
}) => {
	const radius = 40;
	const stroke = 6;
	const normalizedRadius = radius - stroke * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - (percentage / 100) * circumference;

	return (
		<div className="flex items-center gap-6">
			<div className="relative flex items-center justify-center">
				<svg
					height={radius * 2}
					width={radius * 2}
					className="absolute transform -rotate-90 z-20">
					<circle
						stroke="#eaeaea"
						fill="transparent"
						strokeWidth={stroke}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
					<circle
						stroke="#21D07A"
						fill="transparent"
						strokeWidth={stroke}
						strokeDasharray={circumference + " " + circumference}
						style={{ strokeDashoffset }}
						strokeLinecap="round"
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
				</svg>
				<span className="text-lg font-bold text-white">{percentage}%</span>
			</div>
			<div className="flex flex-col">
				<p className="text-xl leading-[25px]">User Rating</p>
				<p className="text-slate-300">{userRating} User reviews</p>
			</div>
		</div>
	);
};

export default CircularProgress;
