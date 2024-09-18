"use server";

import { IAuthUserParams, ReviewType } from "@/types";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const REVIEW_COLLECTION_ID =
	process.env.NEXT_PUBLIC_APPWRITE_REVIEW_COLLECTION_ID;

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



// TRZEBA TO PRZENIEŚĆ DO API
export const createNewReview = async (review: ReviewType) => {
	try {
		const { database } = await createAdminClient();
		const newReview = await database.createDocument(
			DATABASE_ID!,
			REVIEW_COLLECTION_ID!,
			ID.unique(),
			review
		);

		return parseStringify(newReview);
	} catch (error) {
		console.log("DATABASE ERROR: ", error);
	}
};

export const getReviews = async (userId: string) => {
	try {
		const { database } = await createAdminClient();
		const reviews = await database.listDocuments(
			DATABASE_ID!,
			REVIEW_COLLECTION_ID!,
			[Query.equal("userID", userId)]
		);
		return parseStringify(reviews);
	} catch (error) {
		console.log(error);
	}
};
