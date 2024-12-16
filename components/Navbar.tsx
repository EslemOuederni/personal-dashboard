
import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import NavProjects from './nav-projects';

import NavMain from "./nav-main";
// import "../app/icons.css";
export const dynamic = 'force-dynamic'


const NavBar = () => {
  return (
    <Sidebar variant="inset" collapsible="icon" className="bg-[#1F271B]">
      <SidebarHeader className=" h-[12%]">
        <Link href="/" className="px-0 mx-1">
          <Image src="/logo-1.svg" alt="Logo" width={127} height={40.5} />
        </Link>
      </SidebarHeader>
      <SidebarContent className="pt-4">
        <NavMain/>
      </SidebarContent>
      <hr className="w-[calc(100%-34px)] mx-auto  border-t border-[#DBDBDB] " />
      <SidebarContent className="flex-1 pt-2">
        <NavProjects  />
      </SidebarContent>
    </Sidebar>
  );
};

export default NavBar;
