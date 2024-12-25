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

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Members",
    icon: UsersRound,
    href: "/dashboard/members",
  },
  {
    title: "Tasks",
    icon: ListTodo,
    href: "/dashboard/tasks",
  },
  {
    title: "Calendar",
    icon: CalendarSearch,
    href: "/dashboard/calendar",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export { items };
