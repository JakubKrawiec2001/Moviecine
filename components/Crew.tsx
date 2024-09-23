import { CrewMemberType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

type Props = {
  crew: CrewMemberType[];
  id: string;
  type: string;
};

const Crew = ({ crew, id, type }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl 2lg:text-3xl xl:text-4xl font-bold border-l-4 border-mainPink-1 pl-2">
          Crew
        </h2>
        <Link
          href={`/crew/${id}?type=${type}`}
          className="group flex items-center gap-1"
        >
          <p className="text-slate-300 md:text-xl 2lg:group-hover:text-white transition-colors">
            See full crew
          </p>
          <IoIosArrowForward className="text-2xl text-mainPink-2 2lg:group-hover:text-mainPink-1 transition-colors" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8 2lg:gap-12">
        {crew?.slice(0, 10).map((item) => {
          return (
            <div className="flex flex-col items-center gap-2" key={item.id}>
              {item.profile_path !== null ? (
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                  width={300}
                  height={500}
                  alt={item.name}
                  className="rounded-xl object-cover h-[150px] md:h-[200px] xl:h-[250px]"
                />
              ) : (
                <div className="bg-mainBlack-3 w-full rounded-xl flex items-center justify-center h-[150px] md:h-[200px] xl:h-[250px]">
                  <RxAvatar className="text-7xl text-slate-400" />
                </div>
              )}
              <div className="flex flex-col text-center items-center">
                <p className="md:text-lg font-medium">{item.name}</p>
                <p className="text-slate-300">{item.job}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crew;
