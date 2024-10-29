import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoIosCloseCircle } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { reviewSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { MovieDetailsInterface, ReviewType, User } from "@/types";
import {
  createNewReview,
  getReviews,
  updateReview,
} from "@/lib/actions/user.actions";
import { toast } from "./ui/use-toast";
import StarRating from "./StarRating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

type Props = {
  movieId: string;
  title: string;
  posterPath: string;
  mediaType: string;
  user: User;
};

const ReviewPopup = ({
  movieId,
  user,
  title,
  posterPath,
  mediaType,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [existingReview, setExistingReview] = useState<ReviewType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
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

  useEffect(() => {
    const checkUserReview = async () => {
      try {
        const userReviews = await getReviews(user.$id);
        const existingReview = userReviews.documents.find(
          (r: ReviewType) => r.movie_id === movieId
        );
        if (existingReview) {
          setUserRating(existingReview.rating);
          setExistingReview(existingReview);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserReview();
  }, [user.$id, movieId]);

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
        title: title,
        mediaType: mediaType,
        posterPath: posterPath,
      };

      if (isEditing && existingReview) {
        const updatedReview = await updateReview(existingReview.$id!, review);
        toast({
          variant: "default",
          title: "Review updated",
          description: "Your review has been updated.",
        });
        setUserRating(updatedReview.rating);
        setExistingReview(updatedReview);
      } else {
        const newReview = await createNewReview(review);
        toast({
          variant: "default",
          title: "Added review",
          description: "The review was published.",
        });
        setUserRating(newReview.rating);
        setExistingReview(newReview);
      }
      setIsOpen(false);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleEditReview = () => {
    if (existingReview) {
      reset({
        description: existingReview.description,
        rating: existingReview.rating,
      });
      setRating(existingReview.rating);
      setIsEditing(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {isLoading ? (
          <Loader2 size={20} className="animate-spin text-mainPink-1" />
        ) : userRating !== null ? (
          <div
            className="text-xl flex items-center gap-1 cursor-pointer group"
            onClick={handleEditReview}
          >
            <FaStar className="text-yellow-400 group-hover:text-yellow-600 transition-colors" />
            <p className="text-yellow-400 group-hover:text-yellow-600 transition-colors">
              {userRating}
              <span className="font-light text-yellow-500 group-hover:text-yellow-600 transition-colors text-sm xs:text-base italic">
                /10
              </span>
            </p>
            <FaEdit className="ml-2 text-yellow-400 group-hover:text-yellow-600 transition-colors" />
          </div>
        ) : (
          <button className="2lg:hover:text-yellow-600 transition-all 2lg:hover:underline flex items-center gap-1 text-xl text-yellow-400">
            <FaRegStar className="text-2xl" />
            Add Rating
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[800px] bg-mainBlack-1">
        <DialogHeader>
          <DialogTitle className="text-white text-center text-4xl">
            {isEditing ? "Update Review" : "Review"}
          </DialogTitle>
          <DialogClose className="absolute right-4 top-2 z-40">
            <IoIosCloseCircle className="text-2xl text-white hover:text-mainPink-2 transition-colors" />
          </DialogClose>
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
            className="w-full resize-none h-36 p-4 rounded-xl bg-slate-100"
            placeholder="Review..."
          ></textarea>
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
          <Button
            type="submit"
            className="main_btn w-full md:text-xl md:p-6  text-white font-semibold mt-4"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 size={20} className="animate-spin" />
                Sending...
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
