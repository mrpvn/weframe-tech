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
      image: "/assets/images/image1.jpg",
    },
    {
      id: 2,
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Created",
      views: 428,
      pages: 8,
      image: "/assets/images/image2.png",
    },
    {
      id: 3,
      title: "Teknion wins Gold at 2022 International Design Awards",
      category: "Politics",
      date: "20 Sep 2022",
      status: "Draft",
      views: 428,
      pages: 8,
      image: "/assets/images/image3.png",
    },
    {
      id: 4,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      views: 428,
      pages: 8,
      image: "/assets/images/image4.png",
    },
    {
      id: 5,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
      views: 428,
      pages: 8,
      image: "/assets/images/image5.png",
    },
    {
      id: 6,
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Pending",
      views: 428,
      pages: 8,
      image: "/assets/images/image6.png",
    },
    {
      id: 7,
      title: "Teknion wins Gold at 2022 International Design Awards",
      category: "Politics",
      date: "20 Sep 2022",
      status: "Draft",
      views: 428,
      pages: 8,
      image: "/assets/images/image7.png",
    },
    {
      id: 8,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Archived",
      views: 428,
      pages: 8,
      image: "/assets/images/image8.png",
    },
  ];

  // Filter stories based on selected filter
  const filteredStories =
    filter === "All"
      ? stories
      : stories.filter((story) => story.status === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
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
    <div className="rounded-2xl overflow-hidden shadow-sm border cursor-pointer border-gray-100 dark:border-gray-800 bg-white group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/80 group-hover:opacity-0 transition-opacity duration-250 ease-out z-5"></div>
        <Image
          src={story.image || "/placeholder.svg"}
          alt={story.title}
          className="w-full h-full object-cover"
          width={500}
          height={375}
        />

        {/* Top overlay elements */}
        <div className="absolute top-2 right-2 md:top-3 md:right-3 flex gap-1 items-center text-white z-20">
          <div className="flex items-center rounded-[5px] bg-white py-2 px-3 text-black text-base md:text-sm">
            <Eye className="h-5 w-5 mr-1" />
            <span className="text-sm md:text-xs">{story.views}</span>
          </div>
          <div className="flex items-center rounded-[5px] bg-white py-2 px-3 text-black text-base md:text-sm">
            <Copy className="h-5 w-5 mr-1" />
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 gap-2 flex flex-col left-0 right-0 p-4 md:p-3 z-20">
          <h3 className="text-white font-medium text-lg md:text-base line-clamp-2 mb-1">
            {story.title}
          </h3>
          <div className="flex items-center font-semibold justify-between">
            <div className="text-white text-base md:text-sm">
              {story.category} •{" "}
              <span className="text-[#A0A3BD]">{story.date}</span>
            </div>
            <div
              className={`rounded-[5px] py-2 px-4 text-base md:text-sm font-medium ${
                story.status === "Published"
                  ? "bg-[#E4FFF8] text-[#0DAD82]"
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
          {/* Card footer */}
          <div className="flex items-center justify-between z-5">
            <Button
              variant="default"
              className="text-base md:text-sm h-10 md:h-9 rounded-md flex-1 mr-2 md:mr-2 bg-[#E8E9FF] hover:bg-[#d6d8f0] text-black cursor-pointer"
            >
              View
            </Button>
            <Button
              variant="default"
              size="icon"
              className="h-10 md:h-9 w-10 md:w-9 rounded-md bg-[#FAFAFA] hover:bg-[#f0ecec] text-black cursor-pointer"
            >
              <MoreVertical className="h-6 w-6 md:h-5 md:w-5" />
              <span className="sr-only">More options</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
