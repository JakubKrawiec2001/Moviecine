"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { reviewSchema } from "@/lib/utils";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { User } from "@/types";
import { createNewReview } from "@/lib/actions/user.actions";
import { toast } from "./ui/use-toast";
import StarRating from "./StarRating";

const ReviewPopup = ({ movieId, user }: { movieId: string; user: User }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [rating, setRating] = useState(0);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(reviewSchema),
		defaultValues: {
			description: "",
			rating: 0,
		},
	});

	const onSubmit = async (data: z.infer<typeof reviewSchema>) => {
		setIsLoading(true);

		try {
			const review = {
				email: user.email,
				userID: user.$id,
				username: user.name,
				movie_id: movieId,
				description: data.description,
				rating: rating,
			};

			const newReview = await createNewReview(review);
			if (newReview) {
				toast({
					variant: "default",
					title: "Added review",
					description: "The review was published",
				});
			}
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	};
	const handleRatingChange = (newRating: number) => {
		setRating(newRating);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-red-500">Add Reviews</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[800px]">
				<DialogHeader>
					<DialogTitle className="text-white text-center text-4xl">
						Review
					</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<StarRating
						rating={rating}
						changeRating={handleRatingChange}
						numberOfStars={10}
					/>
					<textarea
						{...register("description")}
						name="description"
						className="w-full resize-none mt-8"
						placeholder="Review..."></textarea>
					<Button
						type="submit"
						className="main_btn w-full md:text-xl md:p-6"
						disabled={isLoading}>
						{isLoading ? (
							<span className="flex items-center gap-2">
								<Loader2 size={20} className="animate-spin" />
								Loading...
							</span>
						) : (
							"Send"
						)}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default ReviewPopup;
