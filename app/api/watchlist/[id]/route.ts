import { createAdminClient } from "@/lib/appwrite";
import { NextResponse } from "next/server";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const WATCHLIST_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_WATCHLIST_COLLECTION_ID;

const deleteWatchlistItem = async (id: string) => {
  try {
    const { database } = await createAdminClient();
    const response = await database.deleteDocument(
      DATABASE_ID!,
      WATCHLIST_COLLECTION_ID!,
      id
    );

    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete watchlist item");
  }
};

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    await deleteWatchlistItem(id);
    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.log("Filed to fetch watchlist (GET)", error);
  }
}
