import NavBar from "@/components/shared/nav-bar";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <NavBar />
        <div className="flex flex-col justify-center items-center mt-52">
          <label className="text-9xl text-[#2A71D0]">404</label>
          <label className="mt-8 text-lg text-[#333333]">Page Not Found</label>
          <Link href="/" className="mt-8 px-4 py-3 rounded-lg text-[15px] bg-inherit border-2 border-[#2A71D0] text-[#2A71D0] hover:bg-[#2A71D0] transition-all duration-500 hover:text-[#eee]">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
