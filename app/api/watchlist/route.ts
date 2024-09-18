import { createAdminClient } from "@/lib/appwrite";
import { NextResponse } from "next/server";
import { ID, Query } from "node-appwrite";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const WATCHLIST_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_WATCHLIST_COLLECTION_ID;

const addToWatchlist = async (
  movieId: string,
  userId: string,
  title: string,
  posterPath: string,
  mediaType: string
) => {
  try {
    const { database } = await createAdminClient();
    const response = await database.createDocument(
      DATABASE_ID!,
      WATCHLIST_COLLECTION_ID!,
      ID.unique(),
      { movieId, userId, title, posterPath, mediaType }
    );

    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add to watchlist");
  }
};

const fetchWatchlist = async (userId: string) => {
  try {
    const { database } = await createAdminClient();
    const response = await database.listDocuments(
      DATABASE_ID!,
      WATCHLIST_COLLECTION_ID!,
      [Query.equal("userId", userId)]
    );

    return response.documents;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch watchlist");
  }
};

export async function POST(req: Request) {
  try {
    const { movieId, userId, title, posterPath, mediaType } = await req.json();
    const response = await addToWatchlist(
      movieId,
      userId,
      title,
      posterPath,
      mediaType
    );
    return NextResponse.json(response);
  } catch (error) {
    console.log("Filed to add to watchlist (POST)", error);
  }
}
export async function GET(req: Request) {
  try {
    const userId = req.headers.get("userId")!;
    const watchlist = await fetchWatchlist(userId);
    return NextResponse.json(watchlist);
  } catch (error) {
    console.log("Filed to fetch watchlist (GET)", error);
  }
}
