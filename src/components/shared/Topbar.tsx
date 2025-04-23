import { ChevronLeft, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SidebarTrigger } from "../ui/sidebar";

export function TopBar() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center">
        <SidebarTrigger />
        <ChevronLeft className="mr-5 text-gray-700 dark:text-gray-300 hidden sm:block" />
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Stories
        </h1>
      </div>

      <div className="flex items-center">
        <div className="flex gap-1 items-center justify-between h-10 rounded-[8px] p-2 md:w-[300px] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Avatar className="max-sm:rounded-full rounded-[5px]">
            <AvatarImage src="/assets/user-profile.png" alt="Akshita Patel" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
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
