import { formatBudget, formatTime } from "@/lib/utils";
import {
  CrewMemberType,
  MovieDetailsInterface,
  WatchProviderType,
} from "@/types";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

type Props = {
  director: CrewMemberType;
  writer: CrewMemberType;
  data: MovieDetailsInterface;
  searchParams: { type: string };
  watchProviders: {
    buy?: WatchProviderType[];
    flatrate?: WatchProviderType[];
  };
  producer: CrewMemberType;
};

const RightPanel = ({
  director,
  writer,
  data,
  watchProviders,
  searchParams,
  producer,
}: Props) => {
  return (
    <div className="lg:sticky h-fit lg:top-28 2lg:w-[30%] order-0 lg:order-1 mt-12 lg:mt-0">
      <h2 className="text-2xl 2lg:text-3xl xl:text-4xl font-bold border-l-4 border-mainPink-1 pl-2">
        Details
      </h2>
      <div className="flex flex-col mt-8 gap-6 text-xl">
        <div className="flex gap-4">
          {searchParams.type === "movie" ? (
            <>
              <p className="font-medium">Director</p>
              <p className="text-slate-300">{director?.name}</p>
            </>
          ) : (
            <>
              <p className="font-medium">Creator</p>
              {data.created_by?.slice(0, 1).map((creator) => {
                return (
                  <p className="text-slate-300" key={creator.id}>
                    {creator.name}
                  </p>
                );
              })}
            </>
          )}
        </div>
        <div className="h-[1px] w-full bg-slate-600"></div>
        <div className="flex gap-4">
          {writer !== undefined ? (
            <>
              <p className="font-medium">Writer</p>
              <p className="text-slate-300">{writer?.name}</p>
            </>
          ) : (
            <>
              <p className="font-medium">Producer</p>
              <p className="text-slate-300">{producer?.name}</p>
            </>
          )}
        </div>
        <div className="h-[1px] w-full bg-slate-600"></div>
        {watchProviders !== undefined && (
          <>
            <div className="flex flex-col gap-4">
              <p className="text-white">Available to Rent or Buy</p>
              {watchProviders?.flatrate ? (
                <div className="flex gap-6">
                  {watchProviders.flatrate?.slice(0, 4).map((item) => {
                    return (
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                        width={500}
                        height={500}
                        alt={item.provider_name}
                        className="size-[80px] object-contain rounded-xl"
                        key={item.provider_id}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex gap-6">
                  {watchProviders.buy?.slice(0, 4).map((item) => {
                    return (
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                        width={500}
                        height={500}
                        alt={item.provider_name}
                        className="size-[80px] object-contain rounded-xl"
                        key={item.provider_id}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <div className="h-[1px] w-full bg-slate-600"></div>
          </>
        )}
        <div className="flex gap-4">
          <p className="font-medium">Release date</p>
          {searchParams.type === "movie" ? (
            <p className="text-slate-300">{data.release_date}</p>
          ) : (
            <p className="text-slate-300">
              {data.first_air_date?.slice(0, 4)} -{" "}
              {data.last_air_date?.slice(0, 4)}
            </p>
          )}
        </div>
        <div className="h-[1px] w-full bg-slate-600"></div>
        {searchParams.type === "tv" && (
          <>
            <div className="flex gap-4">
              <p className="font-medium">Number of episodes</p>
              <p className="text-slate-300">{data.number_of_episodes}</p>
            </div>
            <div className="h-[1px] w-full bg-slate-600"></div>
            <div className="flex gap-4">
              <p className="font-medium">Number of seasons</p>
              <p className="text-slate-300">{data.number_of_seasons}</p>
            </div>
            <div className="h-[1px] w-full bg-slate-600"></div>
          </>
        )}
        {searchParams.type === "movie" && (
          <>
            <div className="flex gap-4">
              <p className="font-medium">Budget</p>
              <p className="text-slate-300">
                {data.budget !== 0 ? formatBudget(data.budget) : "-"}
              </p>
            </div>
            <div className="h-[1px] w-full bg-slate-600"></div>
            <div className="flex gap-4">
              <p className="font-medium">Revenue</p>
              <p className="text-slate-300">
                {data.revenue !== 0 ? formatBudget(data.revenue) : "-"}
              </p>
            </div>
            <div className="h-[1px] w-full bg-slate-600"></div>
            <div className="flex gap-4">
              <p className="font-medium">Runtime</p>
              <p className="text-slate-300">{formatTime(data.runtime)}</p>
            </div>
            <div className="h-[1px] w-full bg-slate-600"></div>
          </>
        )}
        <div
          className={`flex gap-4 ${
            data.production_countries?.length > 1 ? "flex-col" : "flex-row"
          }`}
        >
          <p className="font-medium">Production country</p>
          <div className="flex flex-wrap gap-2 details_list">
            {data.production_countries?.map((country, i) => {
              return (
                <p className="text-slate-300 flex items-center gap-2" key={i}>
                  {country.name} <GoDotFill className="details_list_dot" />
                </p>
              );
            })}
          </div>
        </div>
        <div className="h-[1px] w-full bg-slate-600"></div>
        <div
          className={`flex gap-4 ${
            data.production_companies?.length > 1 ? "flex-col" : "flex-row"
          }`}
        >
          <p className="font-medium">Production companies</p>
          <div className="flex flex-wrap gap-2 details_list">
            {data.production_companies?.map((company, i) => {
              return (
                <p className="text-slate-300 flex items-center gap-2" key={i}>
                  {company.name} <GoDotFill className="details_list_dot" />
                </p>
              );
            })}
          </div>
        </div>
        <div className="h-[1px] w-full bg-slate-600"></div>
      </div>
    </div>
  );
};

export default RightPanel;
