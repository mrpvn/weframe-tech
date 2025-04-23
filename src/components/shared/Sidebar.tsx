"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";
import HomeIcon from "@/icons/HomeIcon";
import DocumentIcon from "@/icons/DocumentIcon";
import UserSquare from "@/icons/UserSquare";
import Profile2Icon from "@/icons/Profile2Icon";
import MonitorMobileIcon from "@/icons/MonitorMobileIcon";
import StatusUp from "@/icons/StatusUp";
import VideoSquare from "@/icons/VideoSquare";
import DragIcon from "@/icons/DragIcon";
import NotificationIcon from "@/icons/NotificationIcon";
import SubscriptionIcon from "@/icons/SubscriptionIcon";
import SettingIcon from "@/icons/SettingIcon";
import HeadphoneIcon from "@/icons/HeadphoneIcon";

const DashboardSidebar = () => {
  const menuItems = [
    { icon: HomeIcon, label: "Dashboard", tooltip: "Dashboard" },
    {
      icon: DocumentIcon,
      label: "Content",
      active: true,
      tooltip: "Content",
    },
    { icon: UserSquare, label: "User", tooltip: "User" },
    { icon: Profile2Icon, label: "Task", tooltip: "Task" },
    { icon: MonitorMobileIcon, label: "App/Web", tooltip: "App/Web" },
    { icon: StatusUp, label: "Analytics", tooltip: "Analytics" },
    { icon: VideoSquare, label: "Media", tooltip: "Media" },
    { icon: DragIcon, label: "Customize", tooltip: "Customize" },
    {
      icon: NotificationIcon,
      label: "Notifications",
      tooltip: "Notifications",
    },
    { icon: SubscriptionIcon, label: "Subscription", tooltip: "Subscription" },
    { icon: SettingIcon, label: "Settings", tooltip: "Settings" },
  ];

  const [isCollapsed, setIsCollapsed] = useState(false); // State to track collapse status

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle the collapse state
  };

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-[#e7e8ef] text-[#53545C]"
    >
      <SidebarHeader
        className={`flex h-16 items-end ${isCollapsed ? "px-2" : "px-4"}`}
      >
        <SidebarTrigger
          className="cursor-pointer w-10 h-10"
          onClick={toggleSidebar}
        />
      </SidebarHeader>
      <SidebarContent className={`${isCollapsed ? "p-2" : "p-5"}`}>
        <SidebarMenu>
          <SidebarMenuItem className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <SidebarMenuButton
                variant="default"
                key={index}
                tooltip={item.tooltip}
                className="hover:bg-[#1C1442] hover:text-white text-[14px] font-semibold p-5 gap-3 rounded-[12px] cursor-pointer"
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
              <HeadphoneIcon className="h-5 w-5" />
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
