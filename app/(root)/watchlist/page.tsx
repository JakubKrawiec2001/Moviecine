import Watchlist from "@/components/Watchlist";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const page = async () => {
  const user = await getLoggedInUser();
  return (
    <div
      className="wrapper mt-24 xs:mt-28
 md:mt-36"
    >
      <h1 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center">
        Watchlist
      </h1>
      <Watchlist user={user} />
    </div>
  );
};

export default page;
