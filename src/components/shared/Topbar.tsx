import BackIcon from "@/icons/BackIcon";
import Image from "next/image";
import { SidebarTrigger } from "../ui/sidebar";
import { ChevronDown } from "lucide-react";

export function TopBar() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 py-10 sticky top-0 z-30">
      <div className="flex items-center">
        <BackIcon className="mr-5 cursor-pointer hidden md:block" />
        <SidebarTrigger className="mr-5 w-6 h-6 cursor-pointer block md:hidden" />
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Stories
        </h1>
      </div>

      <div className="flex items-center">
        <div className="flex gap-1 items-center justify-between h-10 rounded-full md:rounded-[8px] max-sm:p-1 max-md:px-1 max-md:py-3 md:px-2 md:py-6 md:w-[300px] border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
          <Image
            src="/assets/user-profile.png"
            alt="Akshita Patel"
            width={40}
            height={40}
            className="rounded-full md:rounded-[8px]"
          />
          <div className="hidden sm:flex flex-col shrink w-full items-start">
            <span className="text-[10px]">Welcome back</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Akshita Patel
            </span>
          </div>
          <ChevronDown className="hidden sm:block h-6 w-6 text-gray-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
