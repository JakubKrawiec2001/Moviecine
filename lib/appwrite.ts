"use server";

import { Client, Account, Databases } from "node-appwrite";
import { cookies } from "next/headers";

const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;
const PROJECT = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!;
const API_KEY = process.env.NEXT_APPWRITE_KEY!;

export async function createSessionClient() {
	const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT);

	const session = cookies().get("moviecine-session");
	if (!session || !session.value) {
		throw new Error("No session");
	}

	client.setSession(session.value);

	return {
		get account() {
			return new Account(client);
		},
	};
}

export async function createAdminClient() {
	const client = new Client()
		.setEndpoint(ENDPOINT)
		.setProject(PROJECT)
		.setKey(API_KEY);

	return {
		get account() {
			return new Account(client);
		},
		get database() {
			return new Databases(client);
		},
	};
}
