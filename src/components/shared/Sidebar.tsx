"use client";

import {
  Contact,
  FileText,
  ImageIcon,
  LayoutDashboard,
  Settings,
  User,
  Bell,
  ListTodo,
  Globe,
  BarChart2,
  Palette,
  CreditCard,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const DashboardSidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", tooltip: "Dashboard" },
    {
      icon: FileText,
      label: "Content",
      active: true,
      tooltip: "Content",
    },
    { icon: User, label: "User", tooltip: "User" },
    { icon: ListTodo, label: "Task", tooltip: "Task" },
    { icon: Globe, label: "App/Web", tooltip: "App/Web" },
    { icon: BarChart2, label: "Analytics", tooltip: "Analytics" },
    { icon: ImageIcon, label: "Media", tooltip: "Media" },
    { icon: Palette, label: "Customize", tooltip: "Customize" },
    { icon: Bell, label: "Notifications", tooltip: "Notifications" },
    { icon: CreditCard, label: "Subscription", tooltip: "Subscription" },
    { icon: Settings, label: "Settings", tooltip: "Settings" },
  ];
  return (
    <Sidebar className="border-r border-[#e7e8ef] text-black">
      <SidebarHeader className="flex h-16 items-center px-4"></SidebarHeader>
      <SidebarContent className="p-5">
        <SidebarMenu>
          <SidebarMenuItem>
            {menuItems.map((item, index) => (
              <SidebarMenuButton
                variant="default"
                key={index}
                tooltip={item.tooltip}
                className="hover:bg-[#1C1442] hover:text-white text-[12px] p-5 gap-3 rounded-[12px] cursor-pointer"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            ))}
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu className="mt-5">
          <SidebarMenuItem>
            <SidebarMenuButton
              variant="default"
              className="p-5 bg-[#E8E9FF] rounded-[12px] cursor-pointer hover:bg-[#e8e9ffb7]"
              tooltip="Contact Support"
            >
              <Contact className="h-5 w-5" />
              <span>Contact Support</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
