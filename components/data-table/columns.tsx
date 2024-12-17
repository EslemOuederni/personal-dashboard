"use client";

import { ArrowUpDown } from 'lucide-react';
import { ColumnDef } from "@tanstack/react-table"
import { ITask } from '@/app/types/task';
import { IProject } from '@/app/types/project';


export const columns: ColumnDef<IProject>[] = [
    {
        id: "name",
        header: " Project Name",
    },
    {
        id: "startDate",
        header: "Start Date",
    },
    {
        id: "endDate",
        header: "End Date",
    },
    {
        id: "tag",
        header: "Tag",
    },
    {
        id: "status",
        header: "Status",
    },
    {
        id: "tasks",
        header: "Tasks",
    },
    {
        id: "actions",
        header: "Actions",
    },

];
