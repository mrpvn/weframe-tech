import Sidebar from "@/components/shared/Sidebar";
import { TopBar } from "@/components/shared/Topbar";

export default function Home() {
  return (
    <div className="flex h-vh">
      <Sidebar />
      <TopBar />
    </div>
  );
}
