import { Search, Calendar, Filter, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchRow() {
  return (
    <div className="flex items-center gap-4 mt-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search"
          className="pl-10 h-10 rounded-full border-gray-200 dark:border-gray-700 focus-visible:ring-[#533BFF]"
        />
      </div>

      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full border-gray-200 dark:border-gray-700"
      >
        <Calendar className="h-4 w-4" />
        <span className="sr-only">Date picker</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full border-gray-200 dark:border-gray-700"
      >
        <Filter className="h-4 w-4" />
        <span className="sr-only">Filter</span>
      </Button>

      <Button className="h-10 px-4 rounded-full bg-[#533BFF] hover:bg-[#4330CC] text-white">
        <Plus className="h-4 w-4 mr-2" />
        Add New Story
      </Button>
    </div>
  );
}
