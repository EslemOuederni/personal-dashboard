import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@radix-ui/react-collapsible';
import React, { useEffect, useState } from "react";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarHeader, SidebarMenuSubButton } from './ui/sidebar';
import { GalleryVerticalEnd, Minus, Plus } from 'lucide-react';
import { IProject } from '@/app/types/project';


const NavProjects = ({ props }: { props: IProject[] }) => {
    return <>
        <SidebarMenu>
            <Collapsible
                defaultOpen={true}
                className="group/collapsible"
            >
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton className='font-semibold text-base text-[#353535]'>
                            My Projects
                            <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                            <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {props.length ? (
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {props.map((item) => (
                                    <SidebarMenuSubItem key={item.name}>
                                        <SidebarMenuSubButton
                                            asChild
                                        >
                                            <a href="">{item.name}</a>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    ) : null}
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </>;
};

export default NavProjects;