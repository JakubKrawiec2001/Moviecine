import movie from "@/public/icons/movie.svg";
import tvShow from "@/public/icons/tv-show.svg";
import home from "@/public/icons/home.svg";
import watchlist from "@/public/icons/watchlist.svg";
import star from "@/public/icons/star.svg";

export const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/movie?genre=featured",
    label: "Movies",
  },
  {
    path: "/tv?genre=featured",
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
    path: "/movie?genre=featured",
    icon: movie,
  },
  {
    id: 3,
    label: "Tv Shows",
    path: "/tv?genre=featured",
    icon: tvShow,
  },
  {
    id: 4,
    label: "Watchlist",
    path: "/watchlist",
    icon: watchlist,
  },
  {
    id: 5,
    label: "Your Rating",
    path: "/reviews",
    icon: star,
  },
];
