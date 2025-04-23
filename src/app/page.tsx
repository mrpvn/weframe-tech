"use client";

import { SearchRow } from "@/components/shared/SearchRow";
import DashboardSidebar from "@/components/shared/Sidebar";
import { StatusFilter } from "@/components/shared/StatusFilter";
import { StoriesGrid } from "@/components/shared/StoriesGrid";
import { TopBar } from "@/components/shared/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 font-inter">
      <SidebarProvider defaultOpen={true}>
        {/* Sidebar */}
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <TopBar />
          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            {/* Search Row */}
            <SearchRow />
            {/* Status Filter */}
            <StatusFilter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            {/* Stories Grid */}
            <StoriesGrid filter={activeFilter} />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
