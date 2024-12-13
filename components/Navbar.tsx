"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarTrigger,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  CalendarSearch,
  Settings,
  ListTodo,
  UsersRound,
  Plus,
  type LucideIcon,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import NavProjects from './nav-projects';
import { IProject } from '@/app/types/project';
import { useSession } from 'next-auth/react';
// import "../app/icons.css";
export const dynamic = 'force-dynamic'
const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Members",
    icon: UsersRound,
    href: "/members",
  },
  {
    title: "Tasks",
    icon: ListTodo,
    href: "/tasks",
  },
  {
    title: "Calendar",
    icon: CalendarSearch,
    href: "/calendar",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [projects, setProjects] = useState([]);
  const { data: session } = useSession();


  useEffect(() => {
    async function fetchPosts () {
      const res = await fetch(`/api/project/by-user?userId=${session?.user.id}`)
      const data = await res.json()
      setProjects(data)
    }
    fetchPosts()
  }, [])

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <Sidebar variant="inset" collapsible="icon" className="bg-[#1F271B]">
      <SidebarHeader className=" h-[12%]">
        <Link href="/" className="px-0 mx-1">
          <Image src="/logo-1.svg" alt="Logo" width={127} height={40.5} />
        </Link>
      </SidebarHeader>
      <SidebarContent className="pt-4">
        <SidebarGroup className="pb-5">
          <SidebarMenu>
            {items.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className="stroke-2 [&>svg]:size-5 !important'"
                      isActive={activeLink === item.href}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <hr className="w-[calc(100%-34px)] mx-auto  border-t border-[#DBDBDB] " />
      <SidebarContent className="flex-1 pt-2">
        <NavProjects props={projects} />
      </SidebarContent>
    </Sidebar>
  );
};

export default NavBar;
