import Image from "next/image";
import spinner from "../../public/icons/spinner.svg";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src={spinner}
        width={40}
        height={40}
        alt="Loading..."
        className="size-[50px] md:size-[80px] animate-spin "
      />
    </div>
  );
};

export default loading;
