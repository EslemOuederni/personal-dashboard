import React from "react";
import { getProjectById } from '../../actions';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { date } from 'zod';

export default async function Page ({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    let id = (await params).id;
    let project = await getProjectById(id)

    if (!project) {
        return <div>Project not found</div>
    }

    const formatDate = (date?: Date) => (date ? new Date(date).toLocaleDateString() : "N/A");

    return (
        <Table>
            <TableCaption>{project.name}</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Project Name</TableHead>
                    <TableHead className="w-[100px]">Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Tag</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tasks Number</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell className="font-medium">{formatDate(project.startDate)}</TableCell>
                    <TableCell>{formatDate(project.endDate)}</TableCell>
                    <TableCell>{project?.tag}</TableCell>
                    <TableCell>{project.status}</TableCell>
                    <TableCell className="text-center">{project.tasks?.length}</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )

}
