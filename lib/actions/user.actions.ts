"use server";

import { IAuthUserParams } from "@/types";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export const signIn = async (userData: IAuthUserParams) => {
	const { email, password } = userData;
	try {
		const { account } = await createAdminClient();
		const response = await account.createEmailPasswordSession(email, password);

		cookies().set("moviecine-session", response.secret, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: true,
		});
		return parseStringify(response);
	} catch (error: any) {
		const errorResponse = { message: error.message };
		return { status: 401, data: errorResponse };
	}
};
export const signUp = async (userData: IAuthUserParams) => {
	const { email, username, password } = userData;

	try {
		const { account } = await createAdminClient();

		const newUser = await account.create(
			ID.unique(),
			email,
			password,
			username
		);

		const session = await account.createEmailPasswordSession(email, password);

		cookies().set("moviecine-session", session.secret, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: true,
		});

		return parseStringify(newUser);
	} catch (error: any) {
		const errorResponse = { message: error.message };
		return { code: 409, data: errorResponse };
	}
};

export async function getLoggedInUser() {
	try {
		const { account } = await createSessionClient();
		const user = await account.get();
		return parseStringify(user);
	} catch (error) {
		return null;
	}
}
export async function logoutUser() {
	try {
		const { account } = await createSessionClient();
		cookies().delete("moviecine-session");

		await account.deleteSession("current");
	} catch (error) {
		return null;
	}
}
