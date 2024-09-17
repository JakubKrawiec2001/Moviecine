import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formSchema = (type: string) =>
	z
		.object({
			username:
				type === "sign-in"
					? z.string().optional()
					: z.string().min(3, {
							message: "Username must contain at least 3 characters",
					  }),
			email: z.string().email().min(2, {
				message: "Invalid email",
			}),
			password: z.string().min(8, {
				message: "Password must contain at least 8 characters",
			}),
			confirmedPassword:
				type === "sign-in" ? z.string().optional() : z.string().min(5),
		})
		.refine(
			(data) =>
				type === "sign-up" ? data.password === data.confirmedPassword : true,
			{
				message: "Passwords don't match",
				path: ["confirmedPassword"],
			}
		);

export const reviewSchema = z.object({
	description: z
		.string()
		.min(5, { message: "The review must contain a minimum of 5 characters" })
		.max(500, {
			message: "The review must contain a maximum of 500 characters",
		}),
});

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export function formatBudget(budget: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(budget);
}

export function formatTime(minutes: number) {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	return `${hours} h ${remainingMinutes} min`;
}

export const formatDate = (isoString: string) => {
	const date = new Date(isoString);
	return date.toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});
};

export const calculateDaysAgo = (isoString: string) => {
	const reviewDate = new Date(isoString).getTime();
	const currentDate = new Date().getTime();
	const timeDifference = currentDate - reviewDate;
	const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	if (daysDifference <= 365) {
		return `${daysDifference} day${daysDifference !== 1 ? "s" : ""} ago`;
	} else {
		const yearsDifference = Math.floor(daysDifference / 365);
		return `${yearsDifference} year${yearsDifference > 1 ? "s" : ""} ago`;
	}
};
