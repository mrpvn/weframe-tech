"use client";

interface StatusFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function StatusFilter({
  activeFilter,
  setActiveFilter,
}: StatusFilterProps) {
  const filters = [
    { name: "All", count: 8 },
    { name: "Draft", count: 2 },
    { name: "Pending", count: 1 },
    { name: "Published", count: 3 },
    { name: "Archived", count: 1 },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => setActiveFilter(filter.name)}
          className={`px-4 py-2 rounded-[10px] cursor-pointer text-sm font-semibold leading-6 transition-colors duration-200 ${
            activeFilter === filter.name
              ? "bg-[#1C1442] text-[#E9E9E9]"
              : "bg-[#E7E8EF] text-gray-700 border border-gray-200"
          }`}
        >
          {filter.name}{" "}
          <span
            className={`${
              activeFilter === filter.name ? "text-[#E9E9E9]" : "text-[#A0A3BD]"
            }`}
          >
            ({filter.count})
          </span>
        </button>
      ))}
    </div>
  );
}
