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
  SidebarGroupAction
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  CalendarSearch,
  Settings,
  ListTodo,
  UsersRound,
  Plus
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Members",
    icon: UsersRound,
    href: "/memebers",
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
  const { open, setOpen } = useSidebar(); // Ensure you have the correct hook

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <div className="flex justify-between items-center">
          {/* Logo section */}
          {open ? (
            <Link href="/" className="py-3 px-2">
              <Image
                src="/logo-1.svg"
                alt="Logo"
                width={249}
                height={79}
              />
            </Link>
          ) : (
            <Link href="/" className="py-3 px-2">
              <Image src="/logo.svg" alt="Logo" width={82} height={82} />
            </Link>
          )}
          {/* Trigger button */}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.href} className="font-medium text-lg text-[#3D3C3C]">
                    <item.icon className='icons' />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <hr className="w-[calc(100%-34px)] mx-auto  border-t border-[#DBDBDB] " />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className=" font-bold text-base text-[#353535]">My Projects</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /><span className="sr-only">Add Project</span>
          </SidebarGroupAction>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default NavBar;
