"use client";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { items } from "@/app/constants/constant";
import { useState } from "react";

const NavMain = () => {
  const [activeLink, setActiveLink] = useState("/");
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };
  return (
    <SidebarGroup className="pb-5">
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild className="group/collapsible">
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
  );
};

export default NavMain;
