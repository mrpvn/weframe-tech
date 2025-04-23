import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CalenderIcon from "@/icons/CalenderIcon";
import FilterIcon from "@/icons/FilterIcon";

export function SearchRow() {
  return (
    <div className="mt-2 bg-[#FFFFFF] max-sm:p-0 px-5 max-sm:bg-transparent py-3 rounded-[10px] flex justify-end">
      <div className="flex max-sm:gap-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search"
            className="pl-10 h-10 rounded-[10px] border-gray-200 w-full sm:w-[200px] md:w-[300px] lg:w-[400px]"
          />
        </div>

        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-[10px] border-gray-200 bg-[#E7E8EF] cursor-pointer"
        >
          <CalenderIcon className="h-10 w-10" />
          <span className="sr-only">Date picker</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-[10px] border-gray-200 bg-[#E7E8EF] cursor-pointer"
        >
          <FilterIcon className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>
      <Button
        className="h-10 px-4 max-sm:ml-2 max-md:ml-4 md:ml-15 rounded-[10px] bg-[#1C1442] hover:bg-[#1c1442c8] text-white cursor-pointer"
        aria-label="Add New Story"
      >
        <span className="hidden md:block">Add New Story</span>
        <span className="block md:hidden">
          <Plus size={24} />
        </span>
      </Button>
    </div>
  );
}
