import movie from "@/public/icons/movie.svg";
import tvShow from "@/public/icons/tv-show.svg";
import home from "@/public/icons/home.svg";
import watchlist from "@/public/icons/watchlist.svg";

export const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/movies?genre=featured",
    label: "Movies",
  },
  {
    path: "/tv-shows",
    label: "Tv Shows",
  },
  {
    path: "/watchlist",
    label: "Watchlist",
  },
];

export const mobileLinks = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: home,
  },
  {
    id: 2,
    label: "Movies",
    path: "/movies",
    icon: movie,
  },
  {
    id: 3,
    label: "Tv Shows",
    path: "/tv-shows",
    icon: tvShow,
  },
  {
    id: 4,
    label: "Watchlist",
    path: "/watchlist",
    icon: watchlist,
  },
];
