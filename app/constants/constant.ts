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

export { items };
