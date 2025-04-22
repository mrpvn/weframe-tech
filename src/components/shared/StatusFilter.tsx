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
    { name: "All", count: 4500 },
    { name: "Draft", count: 1203 },
    { name: "Pending", count: 890 },
    { name: "Published", count: 2432 },
    { name: "Archived", count: 320 },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => setActiveFilter(filter.name)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeFilter === filter.name
              ? "bg-[#533BFF] text-white"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          {filter.name} ({filter.count})
        </button>
      ))}
    </div>
  );
}
