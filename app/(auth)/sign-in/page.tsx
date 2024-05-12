import AuthForm from "@/components/AuthForm";
import React from "react";

const page = () => {
	return (
		<div className="w-[90%] md:w-[500px] glassmorphism rounded-xl">
			<AuthForm type="sign-in" />
		</div>
	);
};

export default page;
