import {
  BarChart2,
  Bell,
  CreditCard,
  FileText,
  Globe,
  Headphones,
  ImageIcon,
  LayoutDashboard,
  ListTodo,
  Palette,
  Settings,
  User,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: FileText, label: "Content", active: true },
    { icon: User, label: "User" },
    { icon: ListTodo, label: "Task" },
    { icon: Globe, label: "App/Web" },
    { icon: BarChart2, label: "Analytics" },
    { icon: ImageIcon, label: "Media" },
    { icon: Palette, label: "Customize" },
    { icon: Bell, label: "Notifications" },
    { icon: CreditCard, label: "Subscription" },
    { icon: Settings, label: "Settings" },
  ];
  return (
    <div className="w-[220px] bg-white h-screen border-r flex flex-col">
      <div className="flex-1 py-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  item.active
                    ? "bg-[#5F3DC4] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm bg-lavender bg-[#E8E9FF] text-[#5F3DC4]"
        >
          <Headphones className="w-5 h-5" />
          <span>Contact Support</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
