import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import React, { useEffect, useState } from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroupLabel,
} from "../ui/sidebar";

import Link from "next/link";
import CreateProject from '../projects/AddProject/projectModal';
import UserProjects from '@/app/(main)/dashboard/actions';

const NavProjects = async () => {
  const project = await UserProjects();
  return (
    <>
      <SidebarMenu>
        <Collapsible defaultOpen={true} className="group/collapsible">
          <SidebarMenuItem>
            <div className=" flex font-semibold text-base text-[#353535] justify-between">
              <SidebarGroupLabel className="font-semibold text-base text-[#353535] pl-4">
                MY PROJECTS
              </SidebarGroupLabel>
              <CreateProject />
            </div>
            {project?.length ? (
              <CollapsibleContent>
                <SidebarMenuSub>
                  {project.map((item) => (
                    <SidebarMenuSubItem key={item._id.toString()}>
                      <SidebarMenuSubButton asChild>
                        <Link href={`/dashboard/project/${item._id}`}>
                          {item.name}
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            ) : null}
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </>
  );
};

export default NavProjects;
