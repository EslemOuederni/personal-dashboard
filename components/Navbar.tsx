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
} from "@/components/ui/sidebar";
import CustomTrigger from "./ui/CustomTrigger";
import {
  LayoutDashboard,
  CalendarSearch,
  Settings,
  ListTodo,
  UsersRound,
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
                src="/logo-mySpace.svg"
                alt="Logo"
                width={300}
                height={80}
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
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default NavBar;
