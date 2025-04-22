import { ChevronLeft, ChevronDown } from "lucide-react";

export function TopBar() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b flex-1 border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center">
        <ChevronLeft className="mr-5 text-gray-700 dark:text-gray-300" />
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Stories
        </h1>
      </div>

      <div className="flex items-center">
        <button className="flex items-center h-10 px-3 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          {/* <Avatar className="h-8 w-8 mr-2">
            <AvatarImage
              src="/placeholder.svg?height=32&width=32"
              alt="Akshita Patel"
            />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar> */}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Akshita Patel
          </span>
          <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
        </button>
      </div>
    </header>
  );
}
