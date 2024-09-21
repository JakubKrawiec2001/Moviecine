"use client";

import { WatchlistType } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface WatchlistContextType {
	watchlistData: WatchlistType[];
	setWatchlistData: (data: WatchlistType[]) => void;
	handleDelete: (id: string) => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(
	undefined
);

export const useWatchlist = () => {
	const context = useContext(WatchlistContext);
	if (!context) {
		throw new Error("useWatchlist must be used within a WatchlistProvider");
	}
	return context;
};

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
	const [watchlistData, setWatchlistData] = useState<WatchlistType[]>([]);

	const handleDelete = async (id: string) => {
		try {
			await fetch(`/api/watchlist/${id}`, { method: "DELETE" });
			setWatchlistData((prevData) =>
				prevData.filter((item) => item.movieId !== id)
			);
		} catch (error) {
			console.error("Error deleting movie:", error);
		}
	};

	return (
		<WatchlistContext.Provider
			value={{ watchlistData, setWatchlistData, handleDelete }}>
			{children}
		</WatchlistContext.Provider>
	);
};
