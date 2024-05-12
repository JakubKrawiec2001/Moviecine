"use server";

interface signInParams {
	email: string;
	password: string;
}
interface signUpParams {
	username: string;
	email: string;
	password: string;
	confirmedPassword: string;
}

export const signIn = async (data: signInParams) => {
	try {
	} catch (error) {
		console.error("Someting went wrong:", error);
	}
};
export const signUp = async (data: signUpParams) => {
	try {
	} catch (error) {
		console.error("Someting went wrong:", error);
	}
};
