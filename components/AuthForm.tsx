"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "./CustomFormField";
import { formSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { toast, useToast } from "@/components/ui/use-toast";

const AuthForm = ({ type }: { type: string }) => {
	const authSchema = formSchema(type);
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();
	const { toast } = useToast();

	const form = useForm<z.infer<typeof authSchema>>({
		resolver: zodResolver(authSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof authSchema>) => {
		setIsLoading(true);

		try {
			if (type === "sign-up") {
				const newUser = await signUp(data);
				setUser(newUser);
				if (newUser.ok) router.push("/");
				if (newUser.code === 409) {
					toast({
						variant: "destructive",
						title: "User exists",
						description: "A user with the same email already exists.",
					});
				}
			}
			if (type === "sign-in") {
				const response = await signIn({
					email: data.email,
					password: data.password,
				});

				if (response.ok) router.push("/");

				if (response.status === 401) {
					toast({
						variant: "destructive",
						title: "Login error",
						description: response.data.message,
					});
				}
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="p-6 md:p-12">
			<h1 className="flex items-center justify-center gap-2 text-lg md:text-3xl font-bold">
				<Image
					src="/icons/logo.svg"
					alt="Moviecine logo"
					width={50}
					height={50}
					className="size-[25px] md:size-[35px]"
				/>
				Moviecine
			</h1>
			{type === "sign-in" ? (
				<p className="text-center text-3xl xs:text-4xl md:text-5xl mt-4 md:mt-8 font-bold">
					Sign In
				</p>
			) : (
				<p className="text-center text-3xl xs:text-4xl md:text-5xl mt-4 md:mt-8 font-bold">
					Sign Up
				</p>
			)}
			<p className="md:text-xl text-center mt-2 text-slate-300">
				Please enter your details
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="mt-6 md:mt-12 flex flex-col gap-6 xs:gap-8 md:gap-12">
					<div className="flex flex-col gap-6">
						{type === "sign-up" && (
							<CustomFormField
								name="username"
								placeholder="Enter your username"
								label="Username"
								control={form.control}
							/>
						)}
						<CustomFormField
							name="email"
							placeholder="Enter your email"
							label="Email"
							control={form.control}
						/>
						<CustomFormField
							name="password"
							placeholder="Enter your password"
							label="Password"
							control={form.control}
						/>
						{type === "sign-up" && (
							<CustomFormField
								name="confirmedPassword"
								placeholder="Enter your password"
								label="Confirm password"
								control={form.control}
							/>
						)}
					</div>
					<Button
						type="submit"
						className="main_btn w-full md:text-xl md:p-6"
						disabled={isLoading}>
						{isLoading ? (
							<span className="flex items-center gap-2">
								<Loader2 size={20} className="animate-spin" />
								Loading...
							</span>
						) : type === "sign-in" ? (
							"Sign In"
						) : (
							"Sign Up"
						)}
					</Button>
					<div className="flex flex-col xs:flex-row items-center justify-center gap-1 xs:gap-2">
						<p className="text-slate-300 md:text-lg">
							{type === "sign-in"
								? "Don't have an account?"
								: "Already have an account?"}
						</p>
						<Link
							href={type === "sign-in" ? "/sign-up" : "/sign-in"}
							className="text-mainPink-1 md:text-lg hover:text-mainPink-2 transition-colors font-bold">
							{type === "sign-in" ? "Sing Up" : "Sign In"}
						</Link>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default AuthForm;
