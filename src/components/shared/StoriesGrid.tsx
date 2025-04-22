import { Eye, Copy, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface StoriesGridProps {
  filter: string;
}

export function StoriesGrid({ filter }: StoriesGridProps) {
  // Sample story data
  const stories = [
    {
      id: 1,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      views: 428,
      pages: 8,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 2,
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Created",
      views: 428,
      pages: 8,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 3,
      title: "Teknion wins Gold at 2022 International Design Awards",
      category: "Politics",
      date: "20 Sep 2022",
      status: "Draft",
      views: 428,
      pages: 8,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 4,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      views: 428,
      pages: 8,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 5,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      views: 428,
      pages: 8,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 6,
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      views: 428,
      pages: 8,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 7,
      title: "Teknion wins Gold at 2022 International Design Awards",
      category: "Politics",
      date: "20 Sep 2022",
      status: "Published",
      views: 428,
      pages: 8,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 8,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      views: 428,
      pages: 8,
      image: "/placeholder.svg?height=400&width=300",
    },
  ];

  // Filter stories based on selected filter
  const filteredStories =
    filter === "All"
      ? stories
      : stories.filter((story) => story.status === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {filteredStories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}

interface StoryCardProps {
  story: {
    id: number;
    title: string;
    category: string;
    date: string;
    status: string;
    views: number;
    pages: number;
    image: string;
  };
}

function StoryCard({ story }: StoryCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-250 ease-out z-10"></div>
        <Image
          src={story.image || "/placeholder.svg"}
          alt={story.title}
          className="w-full h-full object-cover"
        />

        {/* Top overlay elements */}
        <div className="absolute top-3 left-3 flex items-center text-white z-20">
          <Eye className="h-4 w-4 mr-1" />
          <span className="text-xs">{story.views}</span>
        </div>

        <div className="absolute top-3 right-3 flex items-center text-white z-20">
          <Copy className="h-4 w-4 mr-1" />
          <span className="text-xs">{story.pages}</span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-white font-medium text-lg line-clamp-2 mb-1">
            {story.title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="text-white/80 text-xs">
              {story.category} • {story.date}
            </div>
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                story.status === "Published"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  : story.status === "Draft"
                  ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                  : story.status === "Created"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
              }`}
            >
              {story.status}
            </div>
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between p-3 border-t border-gray-100 dark:border-gray-700">
        <Button
          variant="outline"
          className="text-sm h-9 rounded-md flex-1 mr-2"
        >
          View
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md">
          <MoreVertical className="h-5 w-5" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
    </div>
  );
}
